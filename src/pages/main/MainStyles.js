import styled from "styled-components/native";

import { theme } from "../../theme/Theme";

import { Dislike } from "../../assets/Icons";
import { Like } from "../../assets/Icons";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    background-color: #f5fcff;
`;

export const Content = styled.View`
    flex: 1;
`;

export const CardItem = styled.View`
    flex: 1;
    background-color: green;
`;

export const LikeIcon = styled(Like)``;

export const DisLikeIcon = styled(Dislike)``;

export const ButtonsContainer = styled.View`
    flex-direction: row;
    height: 100;
    margin-top: -100;
`;

export const W50 = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const BtnRound = styled.TouchableHighlight`
    border-radius: ${({ isPressed }) => (isPressed ? "36px" : "28px")};
    justify-content: center;
    align-items: center;
`;

export const BtnRoundLike = styled(BtnRound)`
    height: ${({ isPressed }) => (isPressed === "LIKE" ? "72px" : "56px")};
    width: ${({ isPressed }) => (isPressed === "LIKE" ? "72px" : "56px")};
    background-color: ${theme.colors["Error"]};
`;
export const BtnRoundDisLike = styled(BtnRound)`
    height: ${({ isPressed }) => (isPressed === "DISLIKE" ? "72px" : "56px")};
    width: ${({ isPressed }) => (isPressed === "DISLIKE" ? "72px" : "56px")};
    background-color: ${theme.colors["Black"]}};
`;

export const FooterContainer = styled.View`
    align-items: center;
    margin-top: 16;
    margin-bottom: 16;
`;
