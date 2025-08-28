// Modal variant 타입 정의
export type ModalSize = "sm" | "md" | "lg" | "xl" | "full";

// CSS 클래스 매핑
export const MODAL_SIZE_CLASSES: Record<ModalSize, string> = {
  sm: "modal--sm",
  md: "modal--md",
  lg: "modal--lg",
  xl: "modal--xl",
  full: "modal--full",
};
