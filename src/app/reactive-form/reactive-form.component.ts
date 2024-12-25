import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  studentForm : FormGroup = new FormGroup({
    email : new FormControl('example@gmail.com', [ Validators.email, Validators.minLength(3)]),
    password : new FormControl([Validators.required]),
    address : new FormControl(""),
    city : new FormControl('Pune'),
    state : new FormControl(),
    zip : new FormControl(),
    isAcceptTerms : new FormControl()
  })

  formValue :any = '';

  onSave(){
    this.formValue = this.studentForm.value;
  }
}
