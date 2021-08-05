import { Component, OnInit } from '@angular/core';
import {SocialAuthService, SocialUser} from 'angularx-social-login';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
// export class HeaderComponent implements OnInit {
export class HeaderComponent  {

  isLogin: boolean;
  constructor(private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    this.socialAuthService.authState.subscribe(
      data => {
        this.isLogin = (data != null);

      }
    );
  }



}
