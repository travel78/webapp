import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public signUp(body) {
    return this.http.post(`/signup`, body);
  }

  public login(body): Observable<{ role: string, token: string }>{
    return this.http.post<{ role: string, token: string }>(`/login`, body);
  }

  public isAthorized() {
    return this.http.get<{role:string}>('/isAuthorized');
  }
}
