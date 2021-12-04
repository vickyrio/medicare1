import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  //add User
  public addUser(user : any){
    return this.httpClient.post('http://localhost:8080/user/', user)
  }




}
