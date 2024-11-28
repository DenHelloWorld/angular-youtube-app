export interface CustomCondition {
  condition: (value: string) => boolean;
  message: string;
}
