import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { creationDateValidator } from 'app/features/admin/utilits/craetion-date.validator';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  public adminForm!: FormGroup;

  private initAdminFormState: unknown;

  constructor(private formBuilder: FormBuilder) {}

  public initForm(): void {
    this.adminForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ],
      description: ['', [Validators.maxLength(255)]],
      linkImg: ['', [Validators.required]],
      linkVideo: ['', [Validators.required]],
      creationDate: ['', [Validators.required, creationDateValidator()]],
      tags: this.formBuilder.array([this.createTagControl()]),
    });
    this.initAdminFormState = this.adminForm.value;
  }

  private createTagControl(): FormControl {
    return this.formBuilder.control([], [Validators.required]);
  }

  public get tags(): FormArray {
    return this.adminForm.get('tags') as FormArray;
  }

  public onReset(): void {
    this.adminForm.reset(this.initAdminFormState);
  }

  public onSubmit(): void {
    this.adminForm.reset(this.initAdminFormState);
  }
}
