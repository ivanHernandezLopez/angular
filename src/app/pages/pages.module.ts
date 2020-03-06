import { NgModule } from '@angular/core';

import { PAGES_RUTES } from './pages.routes';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './../pages/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
    ],
    exports: [
        PagesComponent,
        DashboardComponent
    ],
    imports: [
        SharedModule,
        PAGES_RUTES
    ]
})
export class PagesModule { }
