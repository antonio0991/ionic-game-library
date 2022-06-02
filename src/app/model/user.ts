import { Game } from './game';
export class User {
  id: string;
  email: string;
  senha: string;
  games: number[];
  cpf: string;
  foto: string;
  endereco: string;
  idade: number;
  dtNasc: Date;
  nome: string;

  constructor(
    id?: string,
    email?: string,
    senha?: string,
    games?: number[],
    cpf?: string,
    foto?: string,
    endereco?: string,
    dtNasc?: Date,
    nome?: string,
  ) {
    this.id = id;
    this.email = email;
    this.senha = senha;
    this.games = games;
    this.cpf = cpf;
    this.foto = foto;
    this.endereco = endereco;
    this.dtNasc = dtNasc;
    this.nome = nome;
  }
}
