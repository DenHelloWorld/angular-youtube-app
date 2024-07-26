import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../../components/admin/admin.component';
import { AdminRoutingModule } from 'app/features/admin/modules/admin/admin-routing.module';
import { FieldsetModule } from 'primeng/fieldset';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    AdminRoutingModule,
    FieldsetModule,
    FormsModule,
    InputIconModule,
    IconFieldModule,
    InputTextModule,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
