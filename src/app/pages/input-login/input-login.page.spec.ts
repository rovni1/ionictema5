import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputLoginPage } from './input-login.page';

describe('InputLoginPage', () => {
  let component: InputLoginPage;
  let fixture: ComponentFixture<InputLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
