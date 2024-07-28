import { FormArray } from '@angular/forms';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { AdminFormService } from 'app/features/admin/srvices/admin-form.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor(public adminFormService: AdminFormService) {}

  public ngOnInit() {
    this.adminFormService.initForm();
  }

  public ngOnDestroy() {
    this.onReset();
  }

  public get tags(): FormArray {
    return this.adminFormService.tags;
  }

  public onReset(): void {
    this.adminFormService.onReset();
  }

  public onSubmit(): void {
    this.adminFormService.onSubmit();
  }
}
