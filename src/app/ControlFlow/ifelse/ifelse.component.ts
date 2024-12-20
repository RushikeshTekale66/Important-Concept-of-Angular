import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-ifelse',
  imports: [FormsModule],
  templateUrl: './ifelse.component.html',
  styleUrl: './ifelse.component.css'
})
export class IfelseComponent {
  div1Visible:boolean = true;
  div2WarningVisible : boolean = false;

  selectedState :string = '';

  showDiv1(){
    this.div1Visible = true;
  }
  hideDiv1(){
    this.div1Visible = false;
  }
  toggleDiv2(){
    this.div2WarningVisible =!this.div2WarningVisible;
  }
}
