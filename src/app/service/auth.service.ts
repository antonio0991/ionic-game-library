import { UserService } from 'src/app/service/user.service';
import { Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  getAuth,
} from '@angular/fire/auth';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioLogado: User;
  constructor(private auth: Auth, private userService: UserService) {
    auth = getAuth();
  }

  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null;
    }
  }

  async login(email, password) {
    try {
      const user = await signInWithEmailAndPassword(this.auth, email, password);
      this.setUser(email);
      return user;
    } catch (e) {
      return null;
    }
  }

  setUser(email){
    this.userService.getUserByEmail(email)
    .subscribe((res) => this.usuarioLogado = res[0]);
    this.setIdade();
  }

  setIdade() {
    const timeDiff = Math.abs(
      Date.now() - new Date(this.usuarioLogado.dtNasc).getTime()
    );
    this.usuarioLogado.idade = Math.floor(
      timeDiff / (1000 * 3600 * 24) / 365.25
    );
  }

  logout() {
    return signOut(this.auth);
  }

  public getLoggedUser() {
    return this.usuarioLogado;
  }
}
