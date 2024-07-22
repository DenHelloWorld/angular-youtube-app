import { CustomButtonSeverity } from 'app/features/youtube/models/custom-button-severity';

export interface CustomButtonConfig {
  label?: string;
  raised?: boolean;
  severity?: CustomButtonSeverity;
  icon?: string;
  rounded?: boolean;
  outlined?: boolean;
  styleClass?: string;
  type?: 'button' | 'submit' | 'reset';
}
