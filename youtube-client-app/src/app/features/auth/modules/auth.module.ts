import { NgModule } from '@angular/core';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { AuthComponent } from 'app/features/auth/components/auth/auth.component';
import { AuthRoutingModule } from 'app/features/auth/modules/auth-routing.module';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CustomButtonComponent,
    AuthRoutingModule,
    ANGULAG_MODULES.CommonModule,
    ANGULAG_MODULES.ReactiveFormsModule,
    ANGULAG_MODULES.FormsModule,
    PRIME_NG_MODULES.DividerModule,
    PRIME_NG_MODULES.InputTextModule,
    PRIME_NG_MODULES.CardModule,
    PRIME_NG_MODULES.FloatLabelModule,
    PRIME_NG_MODULES.PasswordModule,
    PRIME_NG_MODULES.InputIconModule,
    PRIME_NG_MODULES.IconFieldModule,
    PRIME_NG_MODULES.ToolbarModule,
    PRIME_NG_MODULES.FieldsetModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
