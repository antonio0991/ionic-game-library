import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Game } from './../../model/game';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  games = new Array<Game>();
  login: any = { username: '', senha: '' };

  constructor(
    private service: UserService,
    public alertController: AlertController,
    private route: Router,
    public modalCtrl: ModalController
  ) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Acesso negado',
      message: 'Usuário ou senha incorretos',
      buttons: ['Tentar novamente'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  onLogin() {
    this.service.getUser(this.login.username).subscribe(
      (response) => {
        this.games = response.games;
        //TODO: VALIDAR SENHA NO BACKEND
        if (response.senha === this.login.senha) {
          this.route.navigate(['/home']);
          this.service.setLoggedUser(response);
        } else {
          this.presentAlert();
        }
      },
      (error) => {
        if (error.status === 404) {
          this.presentAlert();
        }
      }
    );
  }

  ngOnInit() {}
}
