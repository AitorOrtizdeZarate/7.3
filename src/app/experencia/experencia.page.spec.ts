import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperenciaPage } from './experencia.page';

describe('ExperenciaPage', () => {
  let component: ExperenciaPage;
  let fixture: ComponentFixture<ExperenciaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperenciaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
