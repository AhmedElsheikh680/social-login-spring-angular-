import { Component, OnInit } from '@angular/core';
import {FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser} from 'angularx-social-login';
import {SocialService} from '../../services/social.service';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  socialUser: SocialUser;
  isLogin: boolean; // default false
  constructor(private socialAuthService: SocialAuthService,
              private socialService: SocialService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(
      data => {
        this.isLogin = (data !=null);
      }
    );
  }


  signInWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialService.loginWithGoogle(data.idToken).subscribe(
          res => {
            console.log(res);
          }
        );
      }
    );
  }

  signInWithFB(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID).then(
      data => {
        this.socialService.loginWithFacebook(data.authToken).subscribe(
          res => {
            console.log(res);
          }
        );
      }
    );
  }

  signOut(): void {
    this.socialAuthService.signOut();
  }

}
