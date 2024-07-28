import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AdminService } from './../../srvices/admin.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { creationDateValidator } from 'app/features/admin/utilits/craetion-date.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, OnDestroy {
  public adminForm!: FormGroup;

  private initAdminFormState: unknown;

  constructor(
    public adminService: AdminService,
    private formBuilder: FormBuilder,
  ) {}

  public ngOnInit() {
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

  public ngOnDestroy() {
    this.onReset();
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
    this.adminForm.reset();
  }
}
