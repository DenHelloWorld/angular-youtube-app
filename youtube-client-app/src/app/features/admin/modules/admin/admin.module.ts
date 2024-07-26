import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../../components/admin/admin.component';
import { AdminRoutingModule } from 'app/features/admin/modules/admin/admin-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
@NgModule({
  imports: [CommonModule, AdminRoutingModule, FieldsetModule],
  declarations: [AdminComponent],
})
export class AdminModule {}
