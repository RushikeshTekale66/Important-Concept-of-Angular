import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-for',
  imports: [FormsModule],
  templateUrl: './for.component.html',
  styleUrl: './for.component.css'
})
export class ForComponent {

  cityArray : string[] = ["Pune", "Mumbai", "Nagpur", "Thane"];

  studentList : any[] =[
    {id:1, name : "Rushikesh", city:"Pune", isActive:true},
    {id:2, name : "Rushikesh", city:"Pune", isActive:true},
    {id:3, name : "Rushikesh", city:"Pune", isActive:false},
    {id:4, name : "Rushikesh", city:"Pune", isActive:true},
    {id:5, name : "Rushikesh", city:"Pune", isActive:false},
  ] 
}
