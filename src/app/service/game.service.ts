import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from './../model/game';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class GameService{

  resourceUrl : string = "http://localhost:3000/games/"
  games: Game[];
  usersId: number[];

  constructor(private httpCLient: HttpClient, private userService : UserService) {
    
  }

  setGames(games: Game[]) {
    this.games = games;
  }

  getGames() {
    return this.games;
  }

  getAllGames() : Observable<Game[]>{
    return this.httpCLient.get<Game[]>(this.resourceUrl);
  }

  loadGames(id:number): Observable<Game> {
    return this.httpCLient.get<Game>(`${this.resourceUrl}/${id}`);
  }
}
