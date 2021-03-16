import { Component } from '@angular/core';
import { Role } from './Models/role.enum';
import { User } from './Models/user.model';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Login';
  user?: User;
  isAdmin?: boolean;
  constructor(private authenticationService: AuthService) {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    console.log(this.user);
    if (JSON.parse(localStorage.getItem('user') || '{}').roleName === 'Admin') {
      this.isAdmin = true;
    }
  }

  logout() {
    this.authenticationService.logOut();
    this.isAdmin = false;
    this.user = {};
  }
}
