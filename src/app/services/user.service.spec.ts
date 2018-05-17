import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { UserService } from './user.service';
import { asyncData, asyncError } from '../../testing/async-observable-helpers';
import {UsersData, Users} from '../data/users';
import {currentUser} from '../data/login';
import {credentials} from '../login';
import {signupcredentials} from '../data/sing_up';
import {UserData} from '../data/user_data';
import {userResponse} from '../data/user_response';

describe('UserService', () => {
  let httpClientSpy: { get: jasmine.Spy, post: jasmine.Spy };
  let userService: UserService;
  let httpTestingController: HttpTestingController;
  let userId: number;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    userService = new UserService(<any> httpClientSpy);
    TestBed.configureTestingModule({
      providers: [UserService]
    });
  });

  it('should return expected users (HttpClient called once)', () => {
    const expectedUsers: UsersData[] =
      [
        { id: 1, first_name: 'Madhu', last_name: 'kosuri', email: 'madhu.kosuri@senecaglobal.com', city: 'Ongole', state: 'Andra Pradesh'
         , zipcode: 523101, country: 'India', date_of_birth: new Date()
        },
        { id: 2, first_name: 'Madhu1', last_name: 'kosuri', email: 'madhu.kosuri1@senecaglobal.com', city: 'Ongole', state: 'Andra Pradesh'
          , zipcode: 523102, country: 'India', date_of_birth: new Date()
        }
      ];
    httpClientSpy.get.and.returnValue(asyncData(expectedUsers));
    userService.getUsers().subscribe(
      users => expect(users).toEqual(expectedUsers),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

  it('should return login success response', () => {
    const currentUser: currentUser = {valid_user: true, status: 'success', email: 'madhukosuri@gmail.com', token:'123456QWERT'};
    const user: credentials = {email: 'madhukosuri@gmail.com', password: 'password'};
    httpClientSpy.post.and.returnValue(asyncData(currentUser));
    userService.login(user).subscribe(
      data => expect(data).toEqual(currentUser, 'should return the hero'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should return sign-up success response', () => {
    const currentUser: currentUser = {valid_user: true, status: 'success', email: 'madhukosuri@gmail.com', token:'123456QWERT'};
    const user: signupcredentials = {email: 'madhukosuri@gmail.com', password: 'password', password_confirmation: 'password'};
    httpClientSpy.post.and.returnValue(asyncData(currentUser));
    userService.signUp(user).subscribe(
      data => expect(data).toEqual(currentUser, 'should return the hero'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });

  it('should able to create new use and return response', () =>{
    const userResponse: userResponse=  { id: 1, first_name: 'Madhu', last_name: 'kosuri', email: 'madhu.kosuri@xxxxxx.com',
                              city: 'Ongole', state: 'Andra Pradesh', zipcode: 523101, country: 'India',
                              date_of_birth: new Date(), status: 'success', response_code: 200
                            };
    const UserData: UserData= {first_name: 'Madhu', last_name: 'Kosuri', email: 'madhu.kosuri@xxxx.com'}
    httpClientSpy.post.and.returnValue(asyncData(userResponse));
    userService.signUp(UserData).subscribe(
      data => expect(data).toEqual(userResponse, 'should return the hero'),
      fail
    );
    expect(httpClientSpy.post.calls.count()).toBe(1, 'one call');
  });
  // # getUserInfo

  it('should anble to get user information and return', function () {
    const userResponse: userResponse=  { id: 1, first_name: 'Madhu', last_name: 'kosuri', email: 'madhu.kosuri@xxxxxx.com',
      city: 'Ongole', state: 'Andra Pradesh', zipcode: 523101, country: 'India',
      date_of_birth: new Date(), status: 'success', response_code: 200
    };
    userId = 1;
    httpClientSpy.get.and.returnValue(asyncData(userResponse));
    userService.getUserInfo(userId).subscribe(
      data => expect(data).toEqual(userResponse, 'should return the hero'),
      fail
    );
    expect(httpClientSpy.get.calls.count()).toBe(1, 'one call');
  });

});
