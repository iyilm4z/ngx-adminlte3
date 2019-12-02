import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAdminlte3Component } from './ngx-adminlte3.component';

describe('NgxAdminlte3Component', () => {
  let component: NgxAdminlte3Component;
  let fixture: ComponentFixture<NgxAdminlte3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAdminlte3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAdminlte3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
