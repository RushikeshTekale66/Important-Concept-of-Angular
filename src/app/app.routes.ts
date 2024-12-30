import { Routes } from '@angular/router';
import { PostApiComponent } from './post-api/post-api.component';
import { FormComponent } from './form/form.component';



export const routes: Routes = [
    {
        path:'api',
        component: PostApiComponent,
    },
    {
        path:'form',
        component: FormComponent,
    },
    {
        path:'*',
        redirectTo:'/api',
    }
];
