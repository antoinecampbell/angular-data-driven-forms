import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.less']
})
export class DynamicFormComponent implements OnInit {

  config?: any[];
  form: FormGroup;

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit() {
    this.httpClient.get('/assets/form-spec.json')
      .subscribe((response: any[]) => {
        this.config = response;
        const formGroup = {};
        this.config.forEach(group => {
          if (group.fields) {
            group.fields.forEach(field => {
              formGroup[field.id] = new FormControl('', this.createValidators(field));
            });
          }
        });
        this.form = new FormGroup(formGroup);
      }, error => {
        console.error(error);
      });
  }

  onSubmit() {
    console.log(this.form.value);
  }

  onLoadForm() {
    this.httpClient.get('/assets/form-data.json')
      .subscribe(response => {
        this.form.patchValue(response);
      }, error => {
        console.error(error);
      });
  }

  /**
   * Reset fields back to blank instead of null
   */
  onReset() {
    const value = {};
    this.config.forEach(group => {
      if (group.fields) {
        group.fields.forEach(field => {
          value[field.id] = '';
        });
      }
    });
    this.form.reset(value);
  }

  private createValidators(field: any): ValidatorFn[] {
    const validators: ValidatorFn[] = [];
    if (field.validations) {
      field.validations.forEach(validation => {
        switch (validation.type) {
          case 'length':
            if (validation.minLength) {
              validators.push(Validators.minLength(validation.minLength));
            }
            if (validation.maxLength) {
              validators.push(Validators.maxLength(validation.maxLength));
            }
            break;
          case 'required':
            validators.push(Validators.required);
            break;
        }
      });
    }

    return validators;
  }

}
