import { Routes } from '@angular/router';
import { DirectivesComponent } from './directives/directives.component';
import { FormModelComponent } from './form-model/form-model.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DataBindingComponent } from './Components/data-binding/data-binding.component';

export const routes: Routes = [
    {
        path: 'directives',
        component: DirectivesComponent,
    },
    {
        path: 'form-model',
        component: FormModelComponent,
    },
    {
        path: 'navbar',
        component: NavbarComponent
    },
    {
        path: 'data-binding',
        component: DataBindingComponent
    },
    {
        path: '**',
        redirectTo: '/directives',
    }
];
