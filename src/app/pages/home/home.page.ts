import { AuthService } from 'src/app/service/auth.service';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public service: AuthService) {}
}
