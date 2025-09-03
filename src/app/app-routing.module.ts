import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RoboRegistrationComponent } from './robo-registration/robo-registration.component';

const routes: Routes = [
  {path:'', component:SignupComponent, pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'myrobot', component:RoboRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
