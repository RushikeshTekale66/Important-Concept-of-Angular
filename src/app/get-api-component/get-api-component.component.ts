import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api-component',
  imports: [JsonPipe],
  templateUrl: './get-api-component.component.html',
  styleUrl: './get-api-component.component.css'
})
export class GetApiComponentComponent {
  constructor(private http : HttpClient){

  }

  userList : any[] = [];

  getAllUser(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result : any)=>{
      this.userList = result;
    })
  }
}
