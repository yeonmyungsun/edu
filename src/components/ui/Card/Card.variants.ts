// Card variant 타입 정의
export type CardVariant = "default" | "elevated" | "outlined" | "glass";

export type CardPadding = "none" | "sm" | "md" | "lg" | "xl";

// CSS 클래스 매핑
export const CARD_VARIANT_CLASSES: Record<CardVariant, string> = {
  default: "",
  elevated: "card--elevated",
  outlined: "card--outlined",
  glass: "card--glass",
};

export const CARD_PADDING_CLASSES: Record<CardPadding, string> = {
  none: "card--padding-none",
  sm: "card--padding-sm",
  md: "card--padding-md",
  lg: "card--padding-lg",
  xl: "card--padding-xl",
};
