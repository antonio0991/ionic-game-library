import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  navigate: any;
  constructor() {
    this.sideMenu();
  }

  sideMenu() {
    this.navigate = [
      {
        title: 'Home',
        url: '/home',
        icon: 'home',
      },
      {
        title: 'Games',
        url: '/games',
        icon: 'game-controller-outline',
      },
      {
        title: 'Usuário',
        url: '/user-info',
        icon: 'person-outline',
      },
    ];
  }
}
