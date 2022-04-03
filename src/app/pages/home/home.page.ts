import { Component } from '@angular/core';
import { UserService } from './../../service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public service: UserService) {}
}
