import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Game } from './../model/game';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class GameService{

  resourceUrl = 'http://localhost:3000/games/';
  games: Game[];
  usersId: number[];
  path = 'games/';

  constructor(private firestore: AngularFirestore) {}

  // public getUser(username: string): Observable<User> {
  //   return this.http.get<User>(this.endpoint + username);
  // }

  // public getLoggedUser() {
  //   return this.usuarioLogado;
  // }

  // public setLoggedUser(usuarioLogado: User) {
  //   this.usuarioLogado = usuarioLogado;
  //   const timeDiff = Math.abs(
  //     Date.now() - new Date(usuarioLogado.dtNasc).getTime()
  //   );
  //   this.usuarioLogado.idade = Math.floor(
  //     timeDiff / (1000 * 3600 * 24) / 365.25
  //   );
  // }

  // public setUser (user:User) : Observable<User>{
  //   return this.http.post<User>(this.endpoint, user);
  // }

  // public editUser (user : User) : Observable<User>{
  //   return this.http.put<User>(`${this.endpoint}${user.id}`, user);
  // }

  save(game: Game){
    return this.firestore.collection(this.path).add(game);
  }

  getAll(): Observable<Game[]> {
    return this.firestore.collection<Game>(this.path).valueChanges();
  }

  getGameById(gameId: string){
    return this.firestore.collection(this.path,ref=>ref.where('id','==',gameId)).doc<Game>();
  }

  editGame(game: Game){
    this.firestore.doc(this.path + game.id).update(game);
  }

  deleteItem(gameId: string){
    this.firestore.doc(this.path + gameId).delete();
  }
}
