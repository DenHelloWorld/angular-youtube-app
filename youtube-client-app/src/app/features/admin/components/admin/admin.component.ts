import { FormArray } from '@angular/forms';
import { AdminService } from './../../srvices/admin.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
})
export class AdminComponent implements OnInit, OnDestroy {
  constructor(public adminService: AdminService) {}

  public ngOnInit() {
    this.adminService.initForm();
  }

  public ngOnDestroy() {
    this.onReset();
  }

  public get tags(): FormArray {
    return this.adminService.tags;
  }

  public onReset(): void {
    this.adminService.onReset();
  }

  public onSubmit(): void {
    this.adminService.onSubmit();
  }
}
