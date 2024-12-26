import { Routes } from '@angular/router';
import { GetApiComponentComponent } from './get-api-component/get-api-component.component';


export const routes: Routes = [
    {
        path:'api',
        component: GetApiComponentComponent,
    },
    {
        path:'*',
        redirectTo:'/api',
    }
];
