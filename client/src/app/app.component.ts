import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/service/auth.service';
import { HttpService } from './shared/service/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private http: HttpService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.http.isAthorized().subscribe(
      res => {
        this.authService.pushIsAuthorized(res.role,false);
      },
      err => {
        console.log(err);
      }
    );
  }


}
