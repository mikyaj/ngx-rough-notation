export type types =
  | 'underline'
  | 'box'
  | 'circle'
  | 'highlight'
  | 'strike-through'
  | 'crossed-off'
  | 'bracket';

export type FullPadding = [number, number, number, number];
export type RoughPadding = number | [number, number] | FullPadding;
export type BracketType = 'left' | 'right' | 'top' | 'bottom';

export interface RoughNotationProperties {
  animate?: boolean;
  animationDuration?: number;
  color?: string;
  iterations?: number;
  padding?: RoughPadding;
  strokeWidth?: number;
  brackets?: BracketType | BracketType[]; // defaults to 'right'
}

export interface Annotation extends RoughNotationProperties {
  hide?: () => void;
  remove?: () => void;
  show?: () => void;
}
