import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../../srvices/admin.service';
import { Component, OnInit } from '@angular/core';
import { creationDateValidator } from 'app/features/admin/utilits/auth-password.validator';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit {
  public adminForm!: FormGroup;

  constructor(
    public adminService: AdminService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit() {
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
    });
  }

  public onSubmit(): void {

  }
}
