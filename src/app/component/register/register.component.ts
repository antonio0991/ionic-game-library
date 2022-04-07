import { Component, Input, OnInit } from '@angular/core';
import { CalendarOriginal } from '@awesome-cordova-plugins/calendar';
import { ModalController } from '@ionic/angular';
import { modalController } from '@ionic/core';
import { CalendarComponentOptions, CalendarModal, CalendarModalOptions, CalendarResult } from 'ion2-calendar';
import { Game } from 'src/app/model/game';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {

  user: User = new User();
  @Input() modalName;
  @Input() onSave;

  constructor(private modalCtrl: ModalController,
              private userService: UserService){}
  async close() {
    const closeModal = 'Modal Closed';
    await this.modalCtrl.dismiss(closeModal);
  }

  public setUser() : void{
    this.user.games = [];
    this.userService.setUser(this.user).subscribe( res =>
      this.close()
    );
  }

  ngOnInit() {}

}
