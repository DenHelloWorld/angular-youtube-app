import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { creationDateValidator } from 'app/features/admin/utilits/craetion-date.validator';
import { addCard } from 'app/redux/actions/custom-card.actions';

@Injectable({
  providedIn: 'root',
})
export class CeationCardFormService {
  public adminForm!: FormGroup;

  private initAdminFormState: unknown;

  private formBuilder = inject(FormBuilder);

  private store = inject(Store);

  public initForm(): void {
    this.adminForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      linkImg: ['', [Validators.required]],
      linkVideo: ['', [Validators.required]],
      creationDate: ['', [Validators.required, creationDateValidator()]],
      tags: this.formBuilder.array([this.createTagControl()], [Validators.required]),
    });
    this.initAdminFormState = this.adminForm.value;
  }

  private createTagControl(): FormControl {
    return this.formBuilder.control(['Tag'], [Validators.required]);
  }

  public get tags(): FormArray {
    return this.adminForm.get('tags') as FormArray;
  }

  public onReset(): void {
    this.adminForm.reset(this.initAdminFormState);
  }

  public onSubmit(): void {
    const customCard = this.adminForm.value;
    this.store.dispatch(addCard({ card: customCard }));
    this.adminForm.reset(this.initAdminFormState);
  }
}
