import { AngularFirestore } from '@angular/fire/compat/firestore';
import { UserService } from 'src/app/service/user.service';
import { AppModule } from './../../app.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RegisterComponent } from 'src/app/component/register/register.component';
import { CalendarModule } from 'ion2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginPageRoutingModule,
    IonicModule.forRoot(),
    CalendarModule,
  ],
  declarations: [LoginPage,RegisterComponent],
})
export class LoginPageModule {}
