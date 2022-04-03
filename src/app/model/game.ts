export class Game {
  id: number;
  nome: string;
  imagem: string;
  horas: number;
  genero: string;
  classificacao: string;
  sistemas: string;

  constructor(
    id?: number,
    nome?: string,
    imagem?: string,
    horas?: number,
    genero?: string,
    classificacao?: string,
    sistemas?: string
  ) {
    this.id = id ? id : null;
    this.nome = nome ? nome : null;
    this.imagem = imagem ? imagem : null;
    this.horas = horas ? horas : null;
    this.genero = genero ? genero : null;
    this.classificacao = classificacao ? classificacao : null;
    this.sistemas = sistemas ? sistemas : null;
  }
}
