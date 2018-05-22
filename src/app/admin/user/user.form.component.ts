import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {UserService} from '../../services/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Users} from '../../data/users';
import {composeValidators} from '@angular/forms/src/directives/shared';
import {UsersData} from '../../data/users';

export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}

@Component({
  selector: 'app-user-new',
  templateUrl: './user.form.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: Users;
  errorMessage: string;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
    }
  ];
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
    this.createForm();
  }
  ngOnInit() {

    if(this.route.params['value'].id) {
      this.userService.getUserInfo(this.route.params['value'].id)
        .subscribe((res) => {
            if (res.status == 'success') {
              console.log(res.user)
              this.userForm.patchValue({
                users: {
                  first_name: res.user.first_name,
                  last_name: res.user.last_name
                }
              })
            } else {
              this.errorMessage = 'Invalid Credentials'
            }
          }
        )
    } else {
      console.log('New Action');
    }
  }

  createForm(){
    this.userForm = this.fb.group({
      users: this.fb.group({
        first_name: new FormControl('',[Validators.required]),
        last_name: new FormControl('',[Validators.required]),
        user_name: new FormControl('',[Validators.required]),
        date_of_birth: new FormControl('',[Validators.required]),
        email: new FormControl('', [Validators.required]),
        gender: new FormControl('', [Validators.required]),
        food: new FormControl('', [Validators.required]),
        country: new FormControl('', [Validators.required]),
        zipcode: new FormControl('', [Validators.required]),
        state: new FormControl('', [Validators.required]),
        district: new FormControl('', [Validators.required]),
        hobby: new FormControl('', [Validators.required])
      })
    });
  }

  onSubmit() {
    console.log(this.userForm.valid)
    if (this.userForm.valid) {
      this.userService.create(this.userForm.value)
        .subscribe((res) => {
          console.log(res)
          if (res.status == 'success') {
            this.router.navigate(['admin/dashboard/users']);
          } else {
            this.errorMessage = 'Invalid Credentials'
          }
        })
    } else {
      return false;
    }
  }
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}

