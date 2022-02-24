import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from './project';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  private url = 'http://localhost:8080/api/projects/';

  constructor(private httpClient: HttpClient) {}

  public getAllUsersService() {
    return this.httpClient.get(this.url);
  }

  public getUserService(id: string) {
    return this.httpClient.get(this.url + id);
  }

  // public createUserService(user: any) {
  //   const headers = { 'content-type': 'application/json' };
  //   return this.httpClient.post(this.url, JSON.stringify(user), {
  //     headers: headers,
  //   });
  // }
  // public updateUserService(id: string|number, user: Project) {
  //   const headers = { 'content-type': 'application/json' };
  //   return this.httpClient.put(this.url + id, JSON.stringify(user), {
  //     headers: headers,
  //   });
  // }
}
