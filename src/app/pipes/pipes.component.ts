import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {NewPipePipe} from "../new-pipe.pipe";

@Component({
  selector: 'app-pipes',
  imports: [CommonModule, NewPipePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  title = "Pipe Component";
  date = Date();
  user = {name : "Rushikesh ", mobile : 7887388366}
}
