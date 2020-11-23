"use strict";
import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Constants from "expo-constants";

import Styles from "../../Styles.js";
import Card from "../../NewCard.js";

const NASA_API_KEY = Constants.manifest.extra.nasa_api_key
    ? Constants.manifest.extra.nasa_api_key
    : "MYAPIKEY";

console.log(
    "Constants.manifest.extra.nasa_api_key",
    Constants.manifest.extra.nasa_api_key
);

const NASA_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}&page=1`;

const CardStack = ({ cards, handleAdd, handleRemove }) => {
    return (
        <FlatList
            style={Styles.cardContainer}
            contentContainerStyle={Styles.cardStack}
            data={cards}
            renderItem={({ item, index }) => (
                <Card {...item} index={index} onSwipe={handleRemove} />
            )}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
        />
    );
};

export default CardStack;
