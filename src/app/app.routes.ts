import { Routes } from '@angular/router';
import { Principal } from './layouts/principal/principal';

export const routes: Routes = [
    {
        path: '',
        component: Principal,
        children: []
    }
];
