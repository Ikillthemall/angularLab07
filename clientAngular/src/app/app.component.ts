import { AuthService } from './service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private auth: AuthService
  ) {}
  title = 'clientAngular';

  isLogin() {
    return this.auth.isLogged();
  }

  logout() {
    this.auth.logout();
  }
}
