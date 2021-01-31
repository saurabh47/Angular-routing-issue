import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpecialComponent } from './special/special.component';
import { environment } from '../environments/environment';

let routes: Routes = [
  { path: "", redirectTo: "login", pathMatch: "full" },
  { path: 'login', component: LoginComponent }
];

if(environment.includeSpecialRoute){
  routes.push({ path: 'special-component', component: SpecialComponent });
}

routes.push({ path: '**', component: NotFoundComponent });

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
