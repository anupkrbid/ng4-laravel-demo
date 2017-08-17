import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor( private authService: AuthService) { }

  onSignOut() {
    const token = this.authService.getToken();
    this.authService.signout(token).subscribe(
      (response: Response) => {
        alert(response.json().message);
        localStorage.removeItem('token');
      },
      (error: Response) => console.log(error),
      () => {}
    );
  }
}
