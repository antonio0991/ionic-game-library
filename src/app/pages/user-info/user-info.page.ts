import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from './../../model/user';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {
  public user = new User();
  private subscription: Subscription;

  constructor(public service: AuthService) {}

  ngOnInit() {
    const source = interval(200);
    this.subscription = source.subscribe(() => this.checkLoggedUser());
  }

  private checkLoggedUser() {
    if (this.user.nome === '') {
      this.user = this.service.getLoggedUser();
    } else {
      this.subscription.unsubscribe();
    }
  }
}
