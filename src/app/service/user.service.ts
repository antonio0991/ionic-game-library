import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { Game } from '../model/game';
import { GameService } from '../service/game.service';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  path = 'users/';

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

  save(usuario: User){
    return this.firestore.collection(this.path).add(usuario);
  }

  getAll() {
    return this.firestore.collection(this.path).snapshotChanges();
  }

  getUserByEmail(emailBusca: string){
    console.log(emailBusca);
    return this.firestore.collection(this.path,ref=>ref.where('email','==',emailBusca)).doc<User>();
  }

  editUser(usuario: User){
    delete usuario.id;
    this.firestore.doc(this.path + usuario.id).update(usuario);
  }

  deleteItem(userId: string){
    this.firestore.doc(this.path + userId).delete();
  }
}
