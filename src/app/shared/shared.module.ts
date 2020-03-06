import { NgModule } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotpagefoundComponent } from './notpagefound/notpagefound.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SidebarComponent,
        NotpagefoundComponent
    ],
    exports: [
        HeaderComponent,
        SidebarComponent,
        NotpagefoundComponent
    ]
})
export class SharedModule { }
