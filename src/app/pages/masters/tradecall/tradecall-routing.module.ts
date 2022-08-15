import { NgModule } from "@angular/core";
import { Routes, RouterModule, Router } from "@angular/router";
import { TradecallComponent } from "./tradecall.component";

const routes: Routes = [
    {
        path: '',
        component: TradecallComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class TradecallRoutingModule { }