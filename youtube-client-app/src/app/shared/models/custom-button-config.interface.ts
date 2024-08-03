import { CustomButtonSeverity } from 'app/shared/models/custom-button-severity';

export interface CustomButtonConfig {
  label?: string;
  raised?: boolean;
  severity?: CustomButtonSeverity;
  icon?: string;
  rounded?: boolean;
  outlined?: boolean;
  styleClass?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
