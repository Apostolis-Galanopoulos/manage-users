import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { InitService } from './init.service';

describe('InitService', () => {
  let service: InitService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        InitService
      ]
    });
    service = TestBed.inject(InitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
