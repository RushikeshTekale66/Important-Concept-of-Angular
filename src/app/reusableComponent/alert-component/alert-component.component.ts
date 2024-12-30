import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-alert-component',
  imports: [CommonModule],
  templateUrl: './alert-component.component.html',
  styleUrl: './alert-component.component.css'
})
export class AlertComponentComponent {
  @Input() message : string = '';
  @Input() alertType : string = '';
}
