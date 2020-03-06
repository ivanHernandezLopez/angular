import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NotpagefoundComponent } from './shared/notpagefound/notpagefound.component';

const appRoutes: Routes = [
    { path: 'ingresar', component: LoginComponent },
    { path: 'registro', component: RegisterComponent },
    { path: '**', component: NotpagefoundComponent },
];

export const APP_RUTES = RouterModule.forRoot(appRoutes , { useHash: true })