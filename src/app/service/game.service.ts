import { Injectable } from '@angular/core';
import { Game } from './../model/game';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  games: Game[];

  constructor() {}

  setGames(games: Game[]) {
    this.games = games;
  }

  getGames() {
    return this.games;
  }
}
