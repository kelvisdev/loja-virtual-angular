import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

@NgModule({
    declarations: [
        ProdutoDashboardComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []
})
export class ProdutoModule {}