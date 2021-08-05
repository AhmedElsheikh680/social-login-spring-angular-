import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SocialComponent } from './components/social/social.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'login', component: SocialComponent},
  { path: 'home', component: HomeComponent},
  { path: 'profile', component: ProfileComponent},
  { path: '**', redirectTo: '/login'},
  { path: '', component: HomeComponent}
];

import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    SocialComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    SocialLoginModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '814144140809-4bu5qddtitn6ln9qu2g7hru61lb17lah.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('512706446469534')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
