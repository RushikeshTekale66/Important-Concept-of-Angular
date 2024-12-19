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
  isDivVisible: Boolean = true;
  isDiv2Visible: Boolean = true;

  num1: string = '';
  num2: string = '';

  isActive: boolean = false;
  selectedState: string = '';

  cityArray: string[] = ['Pune', 'Mumbai', 'Nagpur', 'Thane'];

  studentList: any[] = [
    { id: 1, name: "AAA", city: "Pune", isActive: false },
    { id: 2, name: "AAA", city: "Pune", isActive: false },
    { id: 3, name: "AAA", city: "Pune", isActive: false }
  ]

  showDiv1() {
    this.isDivVisible = true;
  }
  hideDiv1() {
    this.isDivVisible = false;
  }

  toggleDiv2() {
    this.isDiv2Visible = !this.isDiv2Visible;
  }
}
