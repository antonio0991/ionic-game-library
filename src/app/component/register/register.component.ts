import { MaskPipe } from 'ngx-mask';
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
              private userService: UserService, private maskPipe: MaskPipe){}
  async close() {
    const closeModal = 'Modal Closed';
    await this.modalCtrl.dismiss(closeModal);
  }

  public setUser(): void{
    this.user.games = [];
    this.userService.setUser(this.user).subscribe( res =>
      this.close()
    );
  }

  updateWithMask(event) {
    this.user.cpf = this.maskPipe.transform(event.currentTarget.value, '000.000.000-00');
  }

  ngOnInit() {}

}
