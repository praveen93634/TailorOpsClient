import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'dashboard',loadComponent:()=>import('./dashboard/dashboard').then(x => x.Dashboard)
    },
    {
        path:'employee',loadComponent:()=>import('./employee/employee').then(x=>x.Employee)
    },
    {
        path:'employee/create',loadComponent:()=>import('./create-employee/create-employee').then(x=>x.CreateEmployee)
    }
];
