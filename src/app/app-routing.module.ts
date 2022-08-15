import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '@modules/main/main.component';
import { LoginComponent } from '@modules/login/login.component';
import { AuthGuard } from '@guards/auth.guard';
import { NonAuthGuard } from '@guards/non-auth.guard';


const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        children: [
            {
                path: 'dashboard',
                loadChildren: () =>
                    import('./pages/dashboard/dashboard.module').then(
                        (m) => m.DashboardModule
                    )
            },
            {
                path: 'clientsubscription',
                loadChildren: () =>
                    import('./pages/clients/client-subscription/client-subscription.module').then(
                        (m) => m.ClientSubscriptionlModule
                    )
            },
            {
                path: 'clients',
                loadChildren: () =>
                    import('./pages/clients/clients/clients.module').then(
                        (m) => m.ClientslModule
                    )
            },
            {
                path: 'tradecallmaster',
                loadChildren: () =>
                    import('./pages/masters/tradecall/tradecall.module').then(
                        (m) => m.TradecallModule
                    )
            },
            {
                path: 'notoficationmaster',
                loadChildren: () =>
                    import(
                        './pages/masters/notification/notification.module'
                    ).then((m) => m.NotificationlModule)
            },
            {
                path: 'change-password',
                loadChildren: () =>
                    import(
                        './pages/change-password/change-password.module'
                    ).then((m) => m.ChangepasswordModule)
            }
        ]
    },
    {
        path: 'login',
        loadChildren: () =>
            import('./modules/login/login.module').then((m) => m.LoginModule),
        canActivate: [NonAuthGuard]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
