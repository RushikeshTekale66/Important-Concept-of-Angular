import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-life-cycle-event',
  imports: [],
  templateUrl: './life-cycle-event.component.html',
  styleUrl: './life-cycle-event.component.css'
})
export class LifeCycleEventComponent implements OnInit, DoCheck, AfterContentInit, AfterViewChecked, AfterContentInit, AfterContentChecked, OnDestroy, OnChanges {

 constructor(){
  console.log("constructor : It will run first");
  
 }

 ngOnInit(): void {
     console.log("ngOnInit : Api call & run with first load");
     
 }

 ngDoCheck(): void {
     console.log("ngOnDoCheck : If view changed it will load");
     
 }
 ngAfterContentChecked(): void {
     console.log("ngAfterContentChecked : ?Run on external element is completed its functionality , Ex : Image or Video");
     
 }

 ngAfterContentInit(): void {
     console.log("ngAfterContentInit : Run on external element is triggered , Ex : Image or Video");
     
 }

 ngAfterViewChecked(): void {
     console.log("ngAfterviewChecked : Run on external view is trigred");
     
 }

 ngOnChanges(changes: SimpleChanges): void {
     console.log("ngOnChanges : trigger on changing the content Ex. used with apis");
     
 }

 ngOnDestroy(): void {
     console.log("ngonDestroy : Run on current component is destroied");
     
 }

 
}
