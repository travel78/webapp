import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from '../../../shared/service/http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public signupForm: FormGroup;

  constructor(private httpService: HttpService, private router: Router) {
  }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, Validators.required),
      'isCompany': new FormControl(false),
    });
  }

  public onSubmit() {
    this.httpService.signUp(this.signupForm.value).subscribe(
      res => {
        this.signupForm.reset();
        this.router.navigate(['login']);
      },
      err => {
        console.log(err);
      }
    );
  }
}
