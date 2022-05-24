import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private httpClient:HttpClient) { }

  requestData() {
    return this.httpClient.get('https://dummyjson.com/products/1')
  }
}
