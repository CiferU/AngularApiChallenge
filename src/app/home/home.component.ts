import { Component, OnInit } from '@angular/core';
import { ApiService } from "../services/api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiService : ApiService
  ) { }

  ngOnInit(): void {
  }

  

  testHello(){
    this.apiService.helloResponse().subscribe((response=>{
     let _response;
     _response = response;
     let x =JSON.parse(JSON.stringify(response));
     alert("the response is: " + x.message);
     }))
 
     return;
 
   }

}
