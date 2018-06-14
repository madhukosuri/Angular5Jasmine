import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule, FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MaterialModule} from '../modules/material/material.module';
import {LoginComponent} from './login.component';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {UserService} from '../services/user.service';
import {LoginData} from '../data/login';
import {DebugElement} from '@angular/core';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let subElment: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;
  let service: UserService;
  let user: LoginData;
  let fb: FormBuilder;
  let loginFrom: FormGroup;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      imports: [MaterialModule, ReactiveFormsModule, RouterModule, HttpClientTestingModule, RouterTestingModule, BrowserAnimationsModule],
      providers: [{provide: UserService}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and evaluate values', () => {
    expect(component).toBeTruthy();
    expect(component.loginNameTitle).toEqual('LOGIN TO DISPUTES');
    expect(component.singupTitle).toBe('SING UP HERE');
    expect(component.loginForm.valid).toBeFalsy()
    fixture.componentInstance.loginForm = new FormGroup({
      user: new FormGroup({
        email: new FormControl('test@example.com'),
        password: new FormControl('secret')
      })
    });
    // let emailInput = fixture.debugElement.query(By.css('[formControlName="email"]'));
    fixture.detectChanges();
    expect(component.loginForm.valid).toBeTruthy()
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
    expect(loginEl.nativeElement.value).toEqual('test@example.com');
    expect(passwordEl.nativeElement.value).toEqual('secret');
    expect(component.loginForm.value).toEqual({user: {email: 'test@example.com', password: 'secret'}});
    // Validators
    fixture.detectChanges();
    loginEl.nativeElement.value =  '';
    expect(Validators.required(loginEl.nativeElement.value)).toEqual({'required': true});
    loginEl.nativeElement.value = 'ddddd@gmail.com';
    fixture.detectChanges();
    expect(Validators.email(new FormControl(loginEl.nativeElement.value))).toBeNull();
  });
});
