import { HttpErrorResponse } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { HttpService } from '@app/core/modules/network/http/http.service';
import { defer } from 'rxjs';
import { USER_MOCK_DATA } from '../mock/user-mock-data';
import { User } from '../models/user.model';

import { UserService } from './user.service';

export function asyncData<T>(data: T) {
  return defer(() => Promise.resolve(data));
}
export function asyncError<T>(errorObject: T) {
  return defer(() => Promise.reject(errorObject));
}

describe('UserService', () => {
  let service: UserService;
  let HttpServiceSpy: jasmine.SpyObj<HttpService>;
  beforeEach(() => {
    HttpServiceSpy = jasmine.createSpyObj('HttpService', ['get', 'post', 'delete', 'put', 'patch']);
    TestBed.configureTestingModule({
      providers: [
        UserService,
        { provide: HttpService, useValue: HttpServiceSpy },
      ]
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('UserService getAll()', () => {
    it('#getAll should return expected users (called once)', (done: DoneFn) => {
      const users: User[] = [USER_MOCK_DATA];
      HttpServiceSpy.get.and.returnValue(asyncData(users));

      service.getAll().subscribe(
        users => {
          expect(users).toEqual(users);
          done();
        },
        done.fail
      );
      expect(HttpServiceSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('#getAll should return expected empty array (called once)', (done: DoneFn) => {
      HttpServiceSpy.get.and.returnValue(asyncData([]));

      service.getAll().subscribe(
        users => {
          expect(users).toEqual([], 'expected empty array');
          done();
        },
        done.fail
      );
      expect(HttpServiceSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('#getAll should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      HttpServiceSpy.get.and.returnValue(asyncError(errorResponse));

      service.getAll().subscribe(
        () => done.fail('expected an error, not users'),
        error => {
          expect(error.message).toContain('404 Not Found');
          done();
        }
      );
    });
  })

  describe('UserService getOne()', () => {
    it('#getOne should return expected user (called once)', (done: DoneFn) => {
      HttpServiceSpy.get.and.returnValue(asyncData(USER_MOCK_DATA));
      const id: number = 1;
      service.getOne(id).subscribe(
        users => {
          expect(users).toEqual(USER_MOCK_DATA, 'expected users');
          done();
        },
        done.fail
      );
      expect(HttpServiceSpy.get.calls.count()).toBe(1, 'one call');
    });

    it('#getOne should return an error when the server returns a 404', (done: DoneFn) => {
      const errorResponse = new HttpErrorResponse({
        error: 'test 404 error',
        status: 404, statusText: 'Not Found'
      });

      HttpServiceSpy.get.and.returnValue(asyncError(errorResponse));
      const id: number = 1;
      service.getOne(id).subscribe(
        () => done.fail('expected an error, not users'),
        error => {
          expect(error.message).toContain('404 Not Found');
          done();
        }
      );
    });
  });

  describe('UserService create()', () => {
    it('#create should return expected user (called once)', (done: DoneFn) => {
        HttpServiceSpy.post.and.returnValue(asyncData(USER_MOCK_DATA));
        service.create(USER_MOCK_DATA).subscribe(
            users => {
                expect(users).toEqual(USER_MOCK_DATA, 'expected users');
                done();
            },
            done.fail
        );
        expect(HttpServiceSpy.post.calls.count()).toBe(1, 'one call');
    });

    it('#create should return an error when the server returns a 404', (done: DoneFn) => {
        const errorResponse = new HttpErrorResponse({
            error: 'test 404 error',
            status: 404, statusText: 'Not Found'
        });

        HttpServiceSpy.post.and.returnValue(asyncError(errorResponse));

        service.create(USER_MOCK_DATA).subscribe(
            () => done.fail('expected an error, not users'),
            error => {
                expect(error.message).toContain('404 Not Found');
                done();
            }
        );
    });
})

});
