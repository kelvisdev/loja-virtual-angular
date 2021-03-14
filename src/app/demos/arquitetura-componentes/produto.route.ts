import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';


const routes: Routes = [
    {
        path: '', component: ProdutoAppComponent,
        children: [
            { path: '', component: ProdutoDashboardComponent },
            { path: 'editar/:id', component: EditarProdutoComponent }
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoRoutingModule { }
