import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'https://sathyaworkspace.herokuapp.com/api/users/';

  constructor(private httpClient: HttpClient) {}

  public getAllUserService() {
    return this.httpClient.get(this.url);
  }

  public getUserService(id: string) {
    return this.httpClient.get(this.url + id);
  }
}