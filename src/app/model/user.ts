import { Game } from './game';
export class User {
  id: string;
  senha: string;
  games: number[];
  cpf: string;
  foto: string;
  endereco: string;
  idade: number;
  dtNasc: Date;

  constructor(
    id?: string,
    senha?: string,
    games?: number[],
    cpf?: string,
    foto?: string,
    endereco?: string,
    dtNasc?: Date
  ) {
    this.id = id;
    this.senha = senha;
    this.games = games;
    this.cpf = cpf;
    this.foto = foto;
    this.endereco = endereco;
    this.dtNasc = dtNasc;
  }
}
