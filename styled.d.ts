import "styled-components/native";
declare module "styled-components/native" {
  export interface DefaultTheme {
    bgColor;
    txtColor: string;
    btnColor: string;
    btnTxtColor: string;
    primary: string;
    secondary: string;
    badge: string;
    subBadge: string;
    cardColor: string;
  }
}
