export type types =
  | 'underline'
  | 'box'
  | 'circle'
  | 'highlight'
  | 'strike-through'
  | 'crossed-off';

export type RoughNotationPadding = number | [number, number, number, number] | [number, number];

export interface RoughNotationProperties {
  animate?: boolean;
  animationDuration?: number;
  color?: string;
  iterations?: number;
  padding?: RoughNotationPadding;
  strokeWidth?: number;
}

export interface Annotation extends RoughNotationProperties {
  hide?: () => void;
  remove?: () => void;
  show?: () => void;
}
