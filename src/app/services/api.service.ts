import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  serviceUrl = "http://localhost:4000"

  constructor(
    public http:HttpClient
  ) { }

  public helloResponse(){
    return this.http.get(this.serviceUrl + '/api/hello')
  }
}
