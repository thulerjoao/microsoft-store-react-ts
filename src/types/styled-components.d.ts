// declarar aqui que o nosso tema ira estender o thema do styled components

import theme from "../assets/styles/theme";

type Theme = typeof theme;

declare module 'styled.components' {
    export interface DefaultTheme extends Theme{}
}
