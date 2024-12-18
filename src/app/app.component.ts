import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { FormModelComponent } from "./form-model/form-model.component"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DataBindingComponent, NavbarComponent, FormModelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
