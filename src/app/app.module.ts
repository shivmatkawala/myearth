import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FirecrackerComponent } from './firecracker/firecracker.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    FirecrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
