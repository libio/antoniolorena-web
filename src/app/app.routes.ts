import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent:()=>import('./shared/components/layaout/layaout.component'),
        children:[
            {
                path:'dashboard',
                loadComponent: () => import('./business/dashboard/dashboard.component')
            },
            {
                path:'profile',
                loadComponent: () => import('./business/profile/profile.component')
            },
            {
                path:'table',
                loadComponent: () => import('./business/tables/tables.component')
            },
            {
                path:'',
                redirectTo:'dashboard',
                pathMatch:'full'
            }
        ]
        
    },
    {
        path:'**',
        redirectTo:'dashboard'
    }
];
