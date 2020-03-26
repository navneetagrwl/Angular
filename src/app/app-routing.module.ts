import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'login',
        loadChildren: './auth/auth.module#AuthModule'
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

