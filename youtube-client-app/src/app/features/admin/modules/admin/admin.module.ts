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
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { CustomButtonComponent } from 'app/shared/components/custom-button/custom-button.component';

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
    InputTextareaModule,
    CalendarModule,
    ChipsModule,
    CustomButtonComponent,
  ],
  declarations: [AdminComponent],
})
export class AdminModule {}
