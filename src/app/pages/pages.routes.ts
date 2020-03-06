import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginGuardGuard } from '../guards/login-guard.guard';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [
            LoginGuardGuard
        ],
        children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_RUTES = RouterModule.forChild(pagesRoutes)