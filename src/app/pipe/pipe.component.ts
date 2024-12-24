import { AsyncPipe, DatePipe, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

import {PracticePipe} from "../customPipes/practice.pipe";

@Component({
  selector: 'app-pipe',
  imports: [PracticePipe, AsyncPipe,UpperCasePipe, LowerCasePipe, TitleCasePipe, DatePipe, JsonPipe],
  templateUrl: './pipe.component.html',
  styleUrl: './pipe.component.css'
})
export class PipeComponent {
firstName : string = 'Angular javascript';
currentDate : Date = new Date();

currentTime : Observable<Date> = new Observable<Date>;

user : any = {
  name : "Rushikesh Tekale",
  email : "rushi@gmail.com",
  mobile : 7887388366,
  state : '',
  isStd : true
}

constructor(){
    this.currentTime = interval(1000).pipe(map(()=>new Date()));
  }

}
