import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { Game } from './../../model/game';
import { AlertController, ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';
import { RegisterComponent } from 'src/app/component/register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  games = new Array<Game>();
  login: any = { username: '', senha: '' };
  modalDataResponse: any;

  constructor(
    private service: UserService,
    public alertController: AlertController,
    private route: Router,
    public modalCtrl: ModalController,
    private authService: AuthService
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
  async addUser() {
    const modal = await this.modalCtrl.create({
      component: RegisterComponent,
      componentProps: {
        game: new Game(),
        modalName: 'Cadastre-se',
      },
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  onLogin() {
    this.authService.login(this.login.username, this.login.senha).then(
      () => {
        this.route.navigate(['/home']);
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
