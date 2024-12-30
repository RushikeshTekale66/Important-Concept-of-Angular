import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reusable-button',
  imports: [],
  templateUrl: './reusable-button.component.html',
  styleUrl: './reusable-button.component.css'
})
export class ReusableButtonComponent {
  @Input() btnText : string = '';
  @Input() btnClass : string = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick(){
    debugger;
    this.onBtnClick.emit("Hi from child");
  }
}
