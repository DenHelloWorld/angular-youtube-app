import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from '../pages/profile-page/profile-page.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ANGULAG_MODULES } from '../../../shared/modules/angular-modules';
import { PRIME_NG_MODULES } from '../../../shared/modules/prime-ng-modules';
import { ProfileFormComponent } from '../components/profile-form/profile-form.component';
import { CustomButtonComponent } from '../../../shared/components/custom-button/custom-button.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ANGULAG_MODULES.FormsModule,
    ANGULAG_MODULES.ReactiveFormsModule,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.FieldsetModule,
    PRIME_NG_MODULES.InputIconModule,
    PRIME_NG_MODULES.IconFieldModule,
    PRIME_NG_MODULES.InputTextModule,
    CustomButtonComponent,
  ],
  declarations: [ProfilePageComponent, ProfileFormComponent],
  exports: [ProfilePageComponent],
})
export class ProfileModule {}
