import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormErrorComponent } from './dynamic-form-error.component';

describe('DynamicFormErrorComponent', () => {
  let component: DynamicFormErrorComponent;
  let fixture: ComponentFixture<DynamicFormErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFormErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
