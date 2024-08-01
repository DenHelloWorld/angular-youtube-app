import { NgModule } from '@angular/core';
import { AdminComponent } from '../../components/admin/admin.component';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';
import { PRIME_NG_MODULES } from 'app/shared/modules/prime-ng-modules';
import { ANGULAG_MODULES } from 'app/shared/modules/angular-modules';
import { AdminRoutingModule } from 'app/features/admin/modules/admin/admin-routing.module';
import { CeationCardFormService } from 'app/features/admin/srvices/creation-card-form.service';
import { CreationCardFormComponent } from 'app/features/admin/components/creation-card-form/creation-card-form.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    CustomButtonComponent,
    ANGULAG_MODULES.FormsModule,
    ANGULAG_MODULES.ReactiveFormsModule,
    ANGULAG_MODULES.CommonModule,
    PRIME_NG_MODULES.FieldsetModule,
    PRIME_NG_MODULES.InputIconModule,
    PRIME_NG_MODULES.IconFieldModule,
    PRIME_NG_MODULES.InputTextModule,
    PRIME_NG_MODULES.InputTextareaModule,
    PRIME_NG_MODULES.CalendarModule,
    PRIME_NG_MODULES.ChipsModule,
    PRIME_NG_MODULES.ChipModule,
  ],
  declarations: [AdminComponent, CreationCardFormComponent],
  providers: [CeationCardFormService],
})
export class AdminModule {}
