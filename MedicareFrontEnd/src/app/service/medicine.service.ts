import { Medicine } from 'src/app/model/Medicine';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient: HttpClient) { }

  public medicines(){
    return this.httpClient.get('http://localhost:8080/medicines/');
  }

  //add medicine
  public addMedicine(medicine){
    return this.httpClient.post('http://localhost:8080/medicines/add/', medicine);
  }

   //delete medicine
   public deleteMedicine(id){
    return this.httpClient.delete<Medicine>('http://localhost:8080/medicines/' +id);
  }

  //getmedicinebyId
  public getMedicine(id){
    return this.httpClient.get('http://localhost:8080/medicines/' +id)
  }

  //update medicine
  public updateMedicine(medicine){
    return this.httpClient.put('http://localhost:8080/medicines/', medicine);
  }

  //get medicines of category
  public getMedicinesOfCategory(cid){
    return this.httpClient.get('http://localhost:8080/medicines/category/' +cid);
  }

   //get medicines of category
   public getActiveMedicines(){
    return this.httpClient.get('http://localhost:8080/medicines/active/');
  }

   //get medicines of category
   public getActiveMedicinesOfCategory(cid){
    return this.httpClient.get('http://localhost:8080/medicines/category/active/' +cid);
  }

  //get medicines by name
  public searchByName(theKeyword) {
    return this.httpClient.get('http://localhost:8080/medicines/active/' + theKeyword);
  }


}
