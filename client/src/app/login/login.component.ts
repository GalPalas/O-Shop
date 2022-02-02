import { Component, OnInit } from '@angular/core';
import { SocialUser, SocialAuthService } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { UserService } from './../services/user.service';
import { User } from './../shared/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: SocialUser = {} as SocialUser;
  users: User[] = [];

  constructor(
    private authService: SocialAuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      const { name, email } = this.user;
      this.addUser({ name, email });
    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  addUser(user: User) {
    this.userService.postUser(user).subscribe((user) => {
      this.users.push(user);
    });
  }
}
