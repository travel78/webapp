import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/service/http.service';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  constructor(private httpService: HttpService, private authService: AuthService) {
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
    });
  }

  public onSubmit() {
    this.httpService.login(this.loginForm.value).subscribe(
      res => {
        this.loginForm.reset();
        localStorage.setItem('token', res.token);
        this.authService.pushIsAuthorized(res.role,true);
      },
      err => {
        console.log(err);
      }
    );
  }
}
