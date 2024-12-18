import { Component } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';

@Component({
  selector: 'app-form-model',
  imports: [FormsModule],
  templateUrl: './form-model.component.html',
  styleUrl: './form-model.component.css'
})

export class FormModelComponent {
  getData(data:NgForm){
    alert(data.name);
  }
}
