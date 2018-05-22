import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {MaterialModule} from '../../modules/material/material.module';
import { RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {UserComponent} from './user.component';
import {UserService} from '../../services/user.service';
import {UsersData} from '../../data/users';
let component: UserComponent;
let fixture: ComponentFixture<UserComponent>;
let spy: any;

describe('UserComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [MaterialModule, RouterModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [{provide: UserService}]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should able test elements', function () {
      expect(component.displayedColumns).toEqual(['id','first_name','last_name', 'email', 'city', 'state', 'zipcode', 'country', 'date_of_birth']);
      expect(component.resultsLength).toEqual(0);
      expect(component.isLoadingResults).toEqual(false);
      expect(component).toBeDefined();
    const expectedUsers: UsersData[] =
      [
        {
          id: 1, first_name: 'Madhu', last_name: 'kosuri', email: 'madhu.kosuri@senecaglobal.com', city: 'Ongole', state: 'Andra Pradesh'
          , zipcode: 523101, country: 'India', date_of_birth: new Date()
        },
        {
          id: 2, first_name: 'Madhu1', last_name: 'kosuri', email: 'madhu.kosuri1@senecaglobal.com', city: 'Ongole', state: 'Andra Pradesh'
          , zipcode: 523102, country: 'India', date_of_birth: new Date()
        }
      ];
      spy = spyOn(component, 'getUsers').and.returnValue(expectedUsers);
      expect(component.getUsers()).toContain(expectedUsers[0]);
  });
});
