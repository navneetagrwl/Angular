import { Component, OnInit, ViewEncapsulation, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as login from 'src/app/auth/login/+state/login.actions';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponentComponent {
  name: string = 'default';
  someArray = [1, 2, 3];
  profileForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store<any>) { }

  ngOnInit() {
    this.loginForm.controls.userName.setValue('some');
    this.loginForm.controls.password.setValue('some');
    alert('onInit');
  }

  // ngOnChanges() {
  //   alert('ngOnChanges');
  // }

  // ngDoCheck() {
  //   alert('ngDoCheck');
  // }

  // ngAfterContentInit() {
  //   alert('ngAfterContentInit');
  // }

  // ngAfterContentChecked() {
  //   alert('ngAfterContentChecked');
  // }

  // ngAfterViewInit() {
  //   alert('ngAfterViewInit');
  // }

  // ngAfterViewChecked() {
  //   alert('ngAfterViewChecked');
  // }

  // ngOnDestroy () {
  //   alert('ngOnDestroy');
  // }

  login() {
    this.name = this.loginForm.value.userName;
    this.someArray = [1];
    this.store.dispatch(new login.LoginAction(this.loginForm.value));
  }
}
