import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Game } from '../../model/game';

@Component({
  selector: 'app-modal-popover',
  templateUrl: './modal-popover.page.html',
  styleUrls: ['./modal-popover.page.scss'],
})
export class ModalPopoverPage implements OnInit {
  @Input() game: Game;
  @Input() modalName;
  @Input() onSave;

  constructor(private modalCtrl: ModalController) {}

  async close() {
    const closeModal = 'Modal Closed';
    await this.modalCtrl.dismiss(closeModal);
  }

  ngOnInit() {}
}
