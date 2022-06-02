import { AuthService } from 'src/app/service/auth.service';
import { Component, OnInit } from '@angular/core';
import { GameService } from '../../service/game.service';
import { Game } from './../../model/game';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { ModalPopoverPage } from '../modal-popover/modal-popover.page';
import { UserService } from 'src/app/service/user.service';
import { GameFirebaseService } from 'src/app/service/shared/game-firebase.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})
export class GamesPage implements OnInit {
  modalDataResponse: any;
  games;
  gamesId: number[] = [];

  constructor(
    private userService: UserService,
    public alertController: AlertController,
    private modalCtrl: ModalController,
    private service: GameService,
    private gameFirebase: GameFirebaseService,
    private authService: AuthService
  ) {}

  async onEdit(selectedGame: Game) {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        game: selectedGame,
        modalName: 'Editar informações',
      },
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
      }
    });

    return await modal.present();
  }

  async addGame() {
    const modal = await this.modalCtrl.create({
      component: ModalPopoverPage,
      componentProps: {
        game: new Game(),
        modalName: 'Novo jogo',
      },
    });

    modal.onDidDismiss().then((modalDataResponse) => {
      if (modalDataResponse !== null) {
        this.modalDataResponse = modalDataResponse.data;
        this.loadGames();
      }
    });

    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Deletar jogo',
      message: 'Tem certeza que deseja deletar esse jogo da sua biblioteca?',
      buttons: ['Cancelar', 'Deletar'],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

  ngOnInit() {
    this.loadGames();
  }

  onDelete(gameId: number) {
    this.presentAlert();
  }

  private loadGames() {
    /* this.gamesId = this.authService.getLoggedUser().games;
    const games: Game[] = [];
    this.gamesId.forEach(id => {
      this.service.loadGames(id).subscribe(res => games.push(res));
    });
    this.games = games;*/
    this.games = this.service.getAll();
  }
}
