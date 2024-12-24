import { Routes } from '@angular/router';
import { PipeComponent } from './pipe/pipe.component';


export const routes: Routes = [
    {
        path:'pipe',
        component:PipeComponent
    },
    {
        path:'*',
        redirectTo:'/pipe',
    }
];
