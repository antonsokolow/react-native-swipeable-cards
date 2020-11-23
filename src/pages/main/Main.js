import React, { useState, useEffect } from "react";
import { Text, ActivityIndicator } from "react-native";
import Constants from "expo-constants";

import Styles from "../../../Styles";
import CardStack from "../../components/CardStack";
import { theme } from "../../theme/Theme";
import * as Style from "./MainStyles";

const NASA_API_KEY = Constants.manifest.extra.nasa_api_key
    ? Constants.manifest.extra.nasa_api_key
    : "MYAPIKEY";
const NASA_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${NASA_API_KEY}&page=1`;

const MainScreen = () => {
    const [cards, setCards] = useState([]);
    const [isPressed, setIsPressed] = React.useState();

    useEffect(() => {
        if (cards.length === 0) {
            handleAdd();
        }
    }, [cards]);

    const handleAdd = async () => {
        try {
            let response = await fetch(NASA_URL);
            if (response.status !== 200) return;
            let result = await response.json();
            setCards(result.photos);
        } catch (err) {
            alert(JSON.stringify(err));
        }
    };

    const handleRemove = (index) => {
        let start = cards.slice(0, index);
        let end = cards.slice(index + 1);
        setCards(start.concat(end));
    };

    const touchProps = {
        activeOpacity: 1,
        onHideUnderlay: () => setIsPressed(),
        isPressed: isPressed,
    };

    const likeTouchProps = {
        underlayColor: theme.colors["Error"],
        onShowUnderlay: () => setIsPressed("LIKE"),
        onPress: () => console.log("Like"),
    };

    const dislikeTouchProps = {
        underlayColor: theme.colors["Black"],
        onShowUnderlay: () => setIsPressed("DISLIKE"),
        onPress: () => console.log("DISLIKE"),
    };

    return (
        <Style.Container>
            <Style.Content>
                <Style.CardItem>
                    {cards.length > 0 ? (
                        <CardStack
                            cards={cards}
                            handleAdd={handleAdd}
                            handleRemove={handleRemove}
                        />
                    ) : (
                        <ActivityIndicator />
                    )}
                </Style.CardItem>
                <Style.FooterContainer>
                    <Text>
                        {cards.length > 0
                            ? `${cards.length} cards`
                            : "Downloading"}
                    </Text>
                </Style.FooterContainer>
            </Style.Content>

            <Style.ButtonsContainer>
                <Style.W50>
                    <Style.BtnRoundDisLike
                        {...touchProps}
                        {...dislikeTouchProps}
                    >
                        <Style.DisLikeIcon fill={theme.colors["White"]} />
                    </Style.BtnRoundDisLike>
                </Style.W50>

                <Style.W50>
                    <Style.BtnRoundLike {...touchProps} {...likeTouchProps}>
                        <Style.LikeIcon fill={theme.colors["White"]} />
                    </Style.BtnRoundLike>
                </Style.W50>
            </Style.ButtonsContainer>
        </Style.Container>
    );
};

export default MainScreen;
