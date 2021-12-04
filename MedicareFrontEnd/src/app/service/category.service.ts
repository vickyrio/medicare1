import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }

  
  public categories(){
    return this.httpClient.get('http://localhost:8080/category/');
  }

  //add Categories
  public addCategory(category){
    return this.httpClient.post('http://localhost:8080/category/add/', category);
  }
}
