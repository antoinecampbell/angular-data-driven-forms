import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DynamicFormComponent} from './dynamic-form/dynamic-form.component';
import {HttpClientModule} from '@angular/common/http';
import {MatButtonModule, MatCardModule, MatInputModule, MatSelectModule} from '@angular/material';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DynamicFormErrorComponent} from './dynamic-form-error/dynamic-form-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFormErrorComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
