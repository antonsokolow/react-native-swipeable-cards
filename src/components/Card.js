'use strict';
import React, { Component } from 'react';
import {
  PanResponder,
  Animated,
  View,
  Image,
  Text
} from 'react-native';
import { format } from "date-fns";

import Styles from '../../Styles.js';

export default class Card extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pan: new Animated.ValueXY()
    };
  }

  componentWillMount() {
    this.panResponder = PanResponder.create({
      onMoveShouldSetResponderCapture: () => true,
      onMoveShouldSetPanResponderCapture: () => true,
      onPanResponderGrant: (e, gestureState) => {
        this.state.pan.setValue({x: 0, y: 0});
      },
      onPanResponderMove: Animated.event([
        null, {dx: this.state.pan.x, dy: this.state.pan.y}
      ], 
      { useNativeDriver: false }), // Animated.event does not work with PanResponder
      onPanResponderRelease: (e, {vx, vy}) => {
        if (this.state.pan.x._value < -150) {
          this.props.onSwipe(this.props.index)
        } else if (this.state.pan.x._value > 150) {
          this.props.onSwipe(this.props.index)
        } else {
          Animated.spring(this.state.pan, {
            useNativeDriver: true,
            toValue: 0,
          }).start()
        }
      }
    });
  }

  componentWillUnmount() {
    this.state.pan.x.removeAllListeners();
    this.state.pan.y.removeAllListeners();
  }

  getMainCardStyle() {
    let {pan} = this.state;
    return [
      Styles.mainCard,
      {position: 'absolute'},
      {left: -175},
      {top: -250},
      {transform: [{translateX: pan.x}, {translateY: pan.y}]},
    ];
  }

  render() {
    let {img_src, earth_date, rover, camera} = this.props;
    const date = new Date(earth_date);
    return (
      <Animated.View style={this.getMainCardStyle()} {...this.panResponder.panHandlers}>
        <View style={Styles.card}>
          <Image source={{uri: img_src}} style={Styles.cardImage}/>
          <View style={Styles.cardText}>
            <Text style={Styles.cardTextMain}>{rover.name}</Text>
            <Text style={Styles.cardTextSecondary}>{camera.full_name}</Text>
            <Text style={Styles.cardTextSecondary}>{format(date, "MMMM dd, yyyy")}</Text>
          </View>
        </View>
      </Animated.View>
    );
  }
}