import { Routes } from '@angular/router';
import { TemplateFormComponent } from './template-form/template-form.component';


export const routes: Routes = [
    {
        path:'form',
        component:TemplateFormComponent
    },
    {
        path:'*',
        redirectTo:'/form',
    }
];
