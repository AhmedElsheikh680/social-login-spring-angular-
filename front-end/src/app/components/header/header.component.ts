import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser} from 'angularx-social-login';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  socialUser: SocialUser;
  isLogin: boolean;
  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(
      data => {
        this.isLogin = (data != null);
        this.socialUser = data;
      }
    );
  }

}
