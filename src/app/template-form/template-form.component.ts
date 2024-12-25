import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-template-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css'
})
export class TemplateFormComponent {
  studentObj : any = {
    email : '',
    password : '',
    address:'',
    city:'',
    state:'',
    zip:'',
    isAcceptTerms:false
  }

  formValue : any = '';

  onSubmit(){
    this.formValue = this.studentObj;
  }

  resetForm(){
    this.studentObj = {
      email : '',
      password : '',
      address:'',
      city:'',
      state:'',
      zip:'',
      isAcceptTerms:false
    }
  }
}
