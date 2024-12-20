import { Routes } from '@angular/router';
import { IfelseComponent } from './ControlFlow/ifelse/ifelse.component';
import { SwitchComponent } from './ControlFlow/switch/switch.component';
import { ForComponent } from './ControlFlow/for/for.component';


export const routes: Routes = [
    {
        path:'if-else',
        component:IfelseComponent
    },
    {
        path:'for',
        component:ForComponent
    },
    {
        path:'switch',
        component:SwitchComponent
    },
    {
        path:'*',
        redirectTo:'/if-else',
    }
];
