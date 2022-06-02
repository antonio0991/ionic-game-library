import { Injectable } from '@angular/core';
import { Game } from 'src/app/model/game';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
@Injectable({
  providedIn: 'root'
})
export class GameFirebaseService {
  private gameListRef
  constructor(private db: AngularFireDatabase) {
 
   }

   createGame(game: Game){
    this.gameListRef = this.db.list('/games');
    return this.gameListRef.push({
      classificacao: game.classificacao,
      genero: game.genero,
      horas: game.horas,
      imagem: game.imagem,
      nome: game.nome,
      sistemas: game.sistemas
    })
   }
   getGameList(){
     this.gameListRef = this.db.list('/games');
     return this.gameListRef;
   }
}
