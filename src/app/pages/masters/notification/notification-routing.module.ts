import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
import {NotificationComponent} from './notification.component';

const routes: Routes = [
    {
        path: '',
        component: NotificationComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class NotificationRoutingModule {}
