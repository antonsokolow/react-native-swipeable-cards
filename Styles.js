"use strict";
import { StyleSheet, Dimensions } from "react-native";

import { theme } from "./src/theme/Theme";

const DIMENSIONS = Dimensions.get("window");

const Styles = StyleSheet.create({
    mainCard: {},
    cardStack: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    card: {
        height: 500,
        width: 350,
        borderWidth: 1,
        borderColor: "lightgrey",
        borderRadius: 8,
        justifyContent: "center",
        backgroundColor: "#FFF",
        overflow: "hidden",
    },
    cardImage: {
        flex: 1,
        backgroundColor: "#1E90FF",
    },
    cardText: {
        position: "absolute",
        top: 24,
        left: 24,
    },
    cardTextMain: {
        textAlign: "left",
        fontSize: 20,
        fontWeight: "500",
        lineHeight: 28,
        letterSpacing: 0.15,
        backgroundColor: "transparent",
        color: "white",
    },
    cardTextSecondary: {
        textAlign: "left",
        fontSize: 14,
        letterSpacing: 0.75,
        lineHeight: 20,
        fontWeight: "400",
        color: "white",
        backgroundColor: "transparent",
    },
    header: {
        backgroundColor: "blue",
        height: 56,
        alignItems: "center",
        justifyContent: "center",
    },
    footer: {
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
    },
    btnRound: {
        height: 56,
        width: 56,
        borderRadius: 28,
        backgroundColor: "#000",
        justifyContent: "center",
        alignItems: "center",
    },
    btnRoundRed: {
        backgroundColor: "#eb5757",
    },
    btnRoundText: {},
    footerTitle: {},
});

export default Styles;
