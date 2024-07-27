import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminService } from './../../srvices/admin.service';
import { Component, OnInit } from '@angular/core';
// import { creationDateValidator } from 'app/features/admin/utilits/craetion-date.validator';

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
      // забыл линк видео добавить
      // linkVideo: ['', [Validators.required]],
      // creationDate: ['', [Validators.required, creationDateValidator()]],
      // tags: this.formBuilder.array([]),
    });
  }

  // public addTag(): void {
  //   const tagsArray = this.adminForm.get('tags') as FormArray;
  //   tagsArray.push(this.formBuilder.control(''));
  // }

  public onSubmit(): void {
    console.log(this.adminForm.valid);
  }
}
