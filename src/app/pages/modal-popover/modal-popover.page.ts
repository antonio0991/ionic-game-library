import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit, Input, Output } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { alertController } from '@ionic/core';
import { GameService } from 'src/app/service/game.service';
import { UserService } from 'src/app/service/user.service';
import { Game } from '../../model/game';

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {
  @Input() game: Game = new Game();
  @Input() modalName;
  @Input() onSave;

  public games;
  public gameId: number;

  // eslint-disable-next-line @typescript-eslint/no-shadow
  constructor(
    private modalCtrl: ModalController,
    private gameService: GameService,
    private userService: UserService,
    private authService: AuthService
  ) {}

  async close() {
    const closeModal = 'Modal Closed';
    await this.modalCtrl.dismiss(closeModal);
  }

  loadGames() {
    this.gameService.getAll().subscribe((res) => (this.games = res));
  }

  addUserGame() {
    this.authService.getLoggedUser().games.push(this.gameId);
    this.userService.editUser(this.authService.getLoggedUser());
    this.authService.setUser(this.authService.getLoggedUser().email);
    this.presentAlert();
    this.close();
  }

  async presentAlert() {
    const alert = await alertController.create({
      cssClass: 'my-custom-class',
      header: 'Jogo adicionado!',
      message: 'O jogo está em sua biblioteca',
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ngOnInit() {
    this.loadGames();
  }
}
