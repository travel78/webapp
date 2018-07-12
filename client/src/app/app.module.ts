import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { HeaderComponent } from './components/header/header.component';
import { PersonComponent } from './components/person/person.component';
import { CompanyComponent } from './components/company/company.component';
import { AppRoutingModule } from './config/app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MaterialModule } from './config/material.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpService } from './shared/service/http.service';
import { InterceptorService } from './config/interceptor.service';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthService } from './shared/service/auth.service';
import { AuthGuardService } from './config/auth-guard.service';
import { WelcomeComponent } from './components/welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    PersonComponent,
    CompanyComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    AuthService,
    AuthGuardService,
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}


