import { Component, signal } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  //Variable Declaration (String, number, boolean, date)
  name : string = "Rushikesh";
  age : number = 23;
  isMarried : boolean = false;
  color : string = "bg-danger";
  inputType = "radio";

  //Signal : It is just like a variable
  firstName = signal("Rushikesh");

  //function declaration
  showAlert(message:string){
    alert(message);
  }

  changeName(){
    this.name = "Rohan";
    this.firstName.set("Rohan");
  }
}
