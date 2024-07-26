export interface CustomCondition {
  condition: (password: string) => boolean;
  message: string;
}
