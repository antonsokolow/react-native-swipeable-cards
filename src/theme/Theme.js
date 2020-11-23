// libs
import React from "react";
import { ThemeProvider } from "styled-components/native";

// locals
import * as figmaTheme from "./theme.json";

const mixins = {
    font: (
        fontSize = 14,
        fontWeight = "normal",
        lineHeight = false,
        letterSpacing = false,
        fontFamily = "IBMPlexSans_500Medium"
    ) => {
        let style = {};
        if (fontSize) {
            style.fontSize = fontSize;
        }
        if (fontWeight) {
            style.fontWeight = fontWeight;
        }
        if (lineHeight) {
            style.lineHeight = lineHeight;
        }
        if (letterSpacing) {
            style.letterSpacing = letterSpacing;
        }
        if (fontFamily) {
            style.fontFamily = fontFamily;
        }

        return style;
    },
};
export const theme = Object.assign(
    {
        name: "My Mars Theme",
    },
    figmaTheme.default,
    mixins
);

const Theme = ({ children }) => (
    <ThemeProvider theme={{ ...figmaTheme, ...mixins }}>
        {children}
    </ThemeProvider>
);

export default Theme;
