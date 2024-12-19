import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { FormModelComponent } from "./form-model/form-model.component";
import {DirectivesComponent} from "./directives/directives.component";
import {PipesComponent} from "./pipes/pipes.component";
import {NewPipePipe} from "./new-pipe.pipe";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PipesComponent , NewPipePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
