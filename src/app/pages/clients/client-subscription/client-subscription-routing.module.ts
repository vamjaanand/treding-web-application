import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { ClientSubscriptionComponent } from './client-subscription.component';

const routes: Routes = [
    {
        path: '',
        component: ClientSubscriptionComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ClientSubscriptionRoutingModule { }
