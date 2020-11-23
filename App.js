"use strict";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRegistry, Text, View, Button } from "react-native";
import { AppLoading } from "expo";
import {
    useFonts,
    IBMPlexSans_400Regular,
    IBMPlexSans_500Medium,
} from "@expo-google-fonts/ibm-plex-sans";

import { theme } from "./src/theme/Theme";
import MainScreen from "./src/pages/main";
import Favorites from "./src/pages/favorites";
import FavoriteButton from "./src/components/atoms/button/Button";

const Stack = createStackNavigator();

const RNCardStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="My Mars"
                    component={MainScreen}
                    options={{
                        title: "My Mars",
                        headerStyle: {
                            backgroundColor: theme.colors["White"],
                        },
                        headerTintColor: theme.colors["Dark"],
                        headerTitleStyle: theme.textStyles["Header Title"],
                        headerRight: () => (
                            <FavoriteButton
                                onPress={() => console.log("This is a button!")}
                            />
                        ),
                    }}
                />
                <Stack.Screen name="Favorites" component={Favorites} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default () => {
    let [fontsLoaded] = useFonts({
        IBMPlexSans_400Regular,
        IBMPlexSans_500Medium,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return <RNCardStack />;
    }
};

AppRegistry.registerComponent("RNCardStack", () => RNCardStack);
