import {Component, Input} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: '[app-dynamic-form-error]',
  templateUrl: './dynamic-form-error.component.html',
  styleUrls: ['./dynamic-form-error.component.less']
})
export class DynamicFormErrorComponent {

  @Input('app-dynamic-form-error') field: any;
  @Input() control: FormControl;

}
