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
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  usuarioLogado: User = new User();
  constructor(private auth: Auth, private userService: UserService) {
    auth.onAuthStateChanged((currentUser) => {
      this.setUser(currentUser.email);
    });
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
      return user;
    } catch (e) {
      return null;
    }
  }

  async setUser(email) {
    await this.userService.getUserByEmail(email).subscribe((res) => {
      this.usuarioLogado = res[0];
      this.setIdade();
    });
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
