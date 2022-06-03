import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from './../../service/user.service';
import { User } from 'src/app/model/user';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  user: User = new User();
  inUse = false;
  cont = 0;
  subscription: Subscription;

  constructor(public service: AuthService) {
    this.user = service.getLoggedUser();
  }

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
