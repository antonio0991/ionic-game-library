import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  private user;
  constructor(public service: AuthService) {}

  ngOnInit() {
    this.user = this.service.getLoggedUser();
  }
}
