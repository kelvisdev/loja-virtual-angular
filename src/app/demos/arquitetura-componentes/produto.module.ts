import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import localPt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
registerLocaleData(localPt);


@NgModule({
    declarations: [
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: []
})
export class ProdutoModule {}