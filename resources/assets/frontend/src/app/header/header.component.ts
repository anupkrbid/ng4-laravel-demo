import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean;
  constructor( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isAuthenticated();
    this.authService.loggedIn.subscribe(
      () => {
        this.isLoggedIn = this.authService.isAuthenticated();
      }
    );
  }

  onSignOut() {
    const token = this.authService.getToken();
    this.authService.signout(token).subscribe(
      (response: Response) => {
        console.log(response.json().message);
        localStorage.removeItem('token');
      },
      (error: Response) => console.log(error),
      () => {
        this.authService.loggedIn.next();
        this.router.navigate(['/sign-in']);
      }
    );
  }

}
