import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, LoginPageRoutingModule, IonicModule.forRoot(), CalendarModule],
  declarations: [LoginPage,RegisterComponent],
})
export class LoginPageModule {}
