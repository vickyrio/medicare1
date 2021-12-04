import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../model/Medicine';



@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient) { }

  getMedicines() {
    return this.httpClient.get<Medicine[]>('http://localhost:8080/medicines/get');
  }

  addMedicine(newMedicine: Medicine) {
    return this.httpClient.post<Medicine>('http://localhost:8080/medicines/add', newMedicine);
  }
}
