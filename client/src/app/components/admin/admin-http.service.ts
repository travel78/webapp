import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class AdminHttpService {

  constructor(private http: HttpClient) {
  }

  public getUsers() {
    return this.http.get<any>('/admin/users');
  }

  public getSkills() {
    return this.http.get<Array<any>>('/admin/skills');
  }

  public getSkill(id: string) {
    let params = new HttpParams().set('logNamespace', id);
    return this.http.get<any>('/admin/skill');
  }

  createGroup(group: { name: string, subgroup: string }) {
    return this.http.post('/admin/group', group);
  }

  getGroups() {
    return this.http.get<Array<any>>('/admin/groups');
  }
}
