import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { RoboRegistrationComponent } from './robo-registration/robo-registration.component';
import { SigninComponent } from './signin/signin.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';

const routes: Routes = [
  {path:'', component:SignupComponent, pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path:'home', component:HomeComponent},
  {path:'myrobot', component:RoboRegistrationComponent},
  {path:'signin', component:SigninComponent},
  {path: 'form1', component: Form1Component},
  {path:'form2', component:Form2Component},
  {path: 'form3', component: Form3Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
