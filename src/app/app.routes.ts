import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',loadComponent:()=>import('./dashboard/dashboard').then(x => x.Dashboard)
    },
    {
        path:'user',loadComponent:()=>import('./employee/employee').then(x=>x.Employee)
    }
];
