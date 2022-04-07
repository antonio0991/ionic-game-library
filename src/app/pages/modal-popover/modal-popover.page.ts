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
  public games:Game[] = [];
  public gameId : number;

  constructor(private modalCtrl: ModalController,
              private gameService: GameService,
              private userService: UserService,
              public alertController: AlertController){}

  async close() {
    const closeModal = 'Modal Closed';
    await this.modalCtrl.dismiss(closeModal);
  }

  loadGames() {
    this.gameService.getAllGames().subscribe( res => this.games = res);
  } 

  addUserGame(){
    this.userService.getLoggedUser().games.push(this.gameId);
    this.userService.editUser(this.userService.getLoggedUser()).subscribe(res => this.userService.getLoggedUser().games = res.games);
    this.presentAlert()
    this.close();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Jogo adicionado!',
      message: 'O jogo está em sua biblioteca'
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }
  
  ngOnInit() {
    this.loadGames();
  }
}
