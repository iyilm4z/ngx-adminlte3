import { TestBed } from '@angular/core/testing';

import { NgxAdminlte3Service } from './ngx-adminlte3.service';

describe('NgxAdminlte3Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxAdminlte3Service = TestBed.get(NgxAdminlte3Service);
    expect(service).toBeTruthy();
  });
});
