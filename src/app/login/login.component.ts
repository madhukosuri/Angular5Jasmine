import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginNameTitle: string;
  singupTitle: string;
  loginForm: FormGroup;
  isSubmit: boolean;
  EMAIL_REGEX = '[a-z0-9!#$%&\'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*';

  ngOnInit(): void {
    this.loginNameTitle = 'LOGIN TO DISPUTES';
    this.singupTitle = 'SING UP HERE';
  }

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      user: this.fb.group({
        email: new FormControl('',
          [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
        password: new FormControl('',
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)
          ])
      })
    });
  }


  get email() {
    return this.loginForm.get('user.email');
  }

  get password() {
    return this.loginForm.get('user.password');
  }

  onSubmit() {
    this.isSubmit = true;
    this.router.navigate(['admin/dashboard']);
  }
}
