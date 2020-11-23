import styled from "styled-components/native";

import { theme } from "../../../theme/Theme";
import { HeartIcon } from "../../../assets/Icons";

export const ButtonContainer = styled.TouchableOpacity`
    justify-content: center;
    background-color: ${theme.colors["White"]};
    margin-right: 16px;
`;

export const ButtonText = styled.Text`
    color: #00ff00;
    text-align: center;
`;

export const RightIcon = styled(HeartIcon)`
    height: 21px;
    width: 23px;
`;
