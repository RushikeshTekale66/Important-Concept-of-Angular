import { Component } from '@angular/core';
import { AlertComponentComponent } from '../reusableComponent/alert-component/alert-component.component';
import { ReusableButtonComponent } from '../reusableComponent/reusable-button/reusable-button.component';

@Component({
  selector: 'app-form',
  imports: [AlertComponentComponent, ReusableButtonComponent],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

}
