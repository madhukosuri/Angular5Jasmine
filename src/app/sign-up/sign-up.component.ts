import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  isSubmit: boolean;
  singUpTitle: string;
  EMAIL_REGEX = '[a-z0-9!#$%&\'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*';

  constructor(private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.createForm();
  }

  createForm() {
    this.signUpForm = this.fb.group({
      user: this.fb.group({
        email: new FormControl('',
          [Validators.required, Validators.pattern(this.EMAIL_REGEX)]),
        password: new FormControl('',
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)
          ]),
        password_confirmation: new FormControl('',
          [Validators.required,
            Validators.minLength(6),
            Validators.maxLength(16)
          ])
      })
    });
  }

  ngOnInit() {
    this.singUpTitle = 'SIGN-UP TO DISPUTES';
  }

  get email() {
    return this.signUpForm.get('user.email');
  }

  get password() {
    return this.signUpForm.get('user.password');
  }
  get password_confirmation(){
    return this.signUpForm.get('user.password_confirmation');
  }
  onSubmit() {
    this.isSubmit = true;
    this.router.navigate(['/dashboard']);
  }
}
