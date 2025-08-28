// Button variant 타입 정의
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "success"
  | "warning"
  | "error";

export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

// CSS 클래스 매핑 (실제 스타일은 CSS 파일에 정의됨)
export const BUTTON_VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: "btn--primary",
  secondary: "btn--secondary",
  outline: "btn--outline",
  ghost: "btn--ghost",
  success: "btn--success",
  warning: "btn--warning",
  error: "btn--error",
};

export const BUTTON_SIZE_CLASSES: Record<ButtonSize, string> = {
  xs: "btn--xs",
  sm: "btn--sm",
  md: "btn--md",
  lg: "btn--lg",
  xl: "btn--xl",
};
