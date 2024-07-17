import { CustomButtonSeverity } from './custom-button-severity';

export interface CustomButtonConfig {
  label?: string;
  raised?: boolean;
  severity?: CustomButtonSeverity;
  icon?: string;
  rounded?: boolean;
}
