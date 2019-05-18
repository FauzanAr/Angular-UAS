import { SecureInnerPagesGuard } from './shared/guard/secure-inner-pages.guard';
import { AuthGuard } from './shared/guard/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

//Component Module

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FriendComponent } from './friend/friend.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

//Firebase services + Enviroment Module

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailAddressComponent } from './verify-email-address/verify-email-address.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FriendComponent,
    ContactUsComponent,
    NotFoundComponent,
    HomeComponent,
    SignUpComponent,
    VerifyEmailAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path: '', redirectTo: '/home', pathMatch: 'full' },
      {path:'home', component:HomeComponent},
      {path:'friend', component:FriendComponent, canActivate:[AuthGuard]},
      {path:'contact-us', component:ContactUsComponent},
      {path:'sign-up', component:SignUpComponent, canActivate:[SecureInnerPagesGuard]},
      {path:'verify-email-address', component:VerifyEmailAddressComponent, canActivate:[SecureInnerPagesGuard]},
      {path:'**', component:NotFoundComponent}
    ]),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
