import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  div1BgColor: string = 'bg-danger';
  isActive: boolean = false;

  num1: string = '';
  num2: string = '';

  isActive1 : boolean = false;

  studentList : any[] =[
    {id : 1,  totalMarks : 10, name : "Rushikesh", city : "Pune", result : true},
    {id : 2, totalMarks : 10,  name : "Rohan", city : "Pune", result : true},
    {id : 3,  totalMarks : 30, name : "Tushar", city : "Pune", result : false},
    {id : 4,  totalMarks : 100, name : "Ranjit", city : "Pune", result : false},
  ]

  customerStyle : any = {
    'color':'white',
    'background-color':'red',
    'width':'200px',
    'height':'200px'
  }

  addRedClass() {
    this.div1BgColor = "bg-danger"
  }
  addBlueClass() {
    this.div1BgColor = "bg-primary"
  }

  toggleDiv2Class() {
    this.isActive = !this.isActive;
  }
}
