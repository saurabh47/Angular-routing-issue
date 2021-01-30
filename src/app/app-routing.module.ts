import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecialComponent } from './special/special.component';
import { environment } from '../environments/environment';


const specialRoutes = [];

if(environment.includeSpecialRoute){
  specialRoutes.push({
    path: 'special-component',
    component: SpecialComponent
  });
}

const routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  {
    path: 'login',
    component: LoginComponent
  },
  ...specialRoutes,
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
