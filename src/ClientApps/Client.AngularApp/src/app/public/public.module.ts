import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { PublicComponent } from './public.component';
//import {Mat} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { IntroComponent } from './components/intro/intro.component';
import { SignupComponent } from './components/signup/signup.component';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    IntroComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ]
})
export class PublicModule { }
