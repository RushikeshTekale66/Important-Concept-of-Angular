import { Routes } from '@angular/router';
import { LifeCycleEventComponent } from './life-cycle-event/life-cycle-event.component';



export const routes: Routes = [
    {
        path:'lifeEvents',
        component: LifeCycleEventComponent,
    },
    {
        path:'*',
        redirectTo:'/lifeEvents',
    }
];
