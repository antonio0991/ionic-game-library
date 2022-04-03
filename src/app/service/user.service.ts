import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Game } from '../model/game';
import { GameService } from '../service/game.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  endpoint = 'http://localhost:3000/users/';
  usuarioLogado: User;

  constructor(public http: HttpClient, private gameService: GameService) {}

  public getUser(username: string): Observable<User> {
    return this.http.get<User>(this.endpoint + username);
  }

  public getLoggedUser() {
    return this.usuarioLogado;
  }

  public setLoggedUser(usuarioLogado: User) {
    this.usuarioLogado = usuarioLogado;
    const timeDiff = Math.abs(
      Date.now() - new Date(usuarioLogado.dtNasc).getTime()
    );
    this.usuarioLogado.idade = Math.floor(
      timeDiff / (1000 * 3600 * 24) / 365.25
    );
    this.gameService.setGames(this.usuarioLogado.games);
  }
}
