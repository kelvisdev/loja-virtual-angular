import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";


const routes: Routes = [
    { path: '', component: ProdutoDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }
