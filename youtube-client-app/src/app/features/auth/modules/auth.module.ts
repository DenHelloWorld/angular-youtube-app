import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PasswordModule } from 'primeng/password';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from 'app/features/auth/components/auth/auth.component';
import { AuthRoutingModule } from 'app/features/auth/modules/auth-routing.module';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    DividerModule,
    CustomButtonComponent,
    InputTextModule,
    CardModule,
    FormsModule,
    FloatLabelModule,
    PasswordModule,
    InputIconModule,
    IconFieldModule,
    ReactiveFormsModule,
    ToolbarModule,
    FieldsetModule,
  ],
  exports: [AuthComponent],
})
export class AuthModule {}
