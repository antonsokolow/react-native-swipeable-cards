import React from "react";
import { Button, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { theme } from "../../../theme/Theme";
import * as Styles from "./ButtonStyles";

const FavoriteButton = ({ onPress }) => {
    const navigation = useNavigation();
    return (
        <Styles.ButtonContainer
            onPress={() => navigation.navigate("Favorites")}
        >
            <Styles.RightIcon fill={theme.colors["Error"]} />
        </Styles.ButtonContainer>
    );
};

export default FavoriteButton;
