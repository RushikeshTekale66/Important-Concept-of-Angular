import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';
import {NavbarComponent} from "./navbar/navbar.component";
import { FormModelComponent } from "./form-model/form-model.component";
import {DirectivesComponent} from "./directives/directives.component";
import {PipesComponent} from "./pipes/pipes.component";
import {NewPipePipe} from "./new-pipe.pipe";
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  imports: [RouterModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';
}
