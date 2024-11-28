import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { CeationCardFormService } from 'app/features/admin/srvices/creation-card-form.service';

@Component({
  selector: 'app-creation-card-form',
  templateUrl: './creation-card-form.component.html',
})
export class CreationCardFormComponent implements OnInit, OnDestroy {
  public creationCardFormService = inject(CeationCardFormService);

  public ngOnInit() {
    this.creationCardFormService.initForm();
  }

  public ngOnDestroy() {
    this.onReset();
  }

  public get tags(): FormArray {
    return this.creationCardFormService.tags;
  }

  public get adminForm() {
    return this.creationCardFormService.adminForm;
  }

  public onReset(): void {
    this.creationCardFormService.onReset();
  }

  public onSubmit(): void {
    this.creationCardFormService.onSubmit();
  }
}
