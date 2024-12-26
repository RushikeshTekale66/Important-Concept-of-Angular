import { Routes } from '@angular/router';
import { PostApiComponent } from './post-api/post-api.component';



export const routes: Routes = [
    {
        path:'api',
        component: PostApiComponent,
    },
    {
        path:'*',
        redirectTo:'/api',
    }
];
