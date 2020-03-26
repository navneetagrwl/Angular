import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponentComponent } from './login/container/login-component.component';

export const auth_routes: Routes = [
  {
    path: '',
    component: LoginComponentComponent,

  }
];


@NgModule({
  imports: [RouterModule.forChild(auth_routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

