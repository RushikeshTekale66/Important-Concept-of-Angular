import { Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


export const routes: Routes = [
    {
        path:'form',
        component: ReactiveFormComponent
    },
    {
        path:'*',
        redirectTo:'/form',
    }
];
