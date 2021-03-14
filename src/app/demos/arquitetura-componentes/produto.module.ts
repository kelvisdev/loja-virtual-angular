import { ProdutoAppComponent } from './produto.app.component';
import { ProdutoRoutingModule } from './produto.route';
import { ProdutoDashboardComponent } from './produto-dashboard/produto-dashboard.component';
import { CommonModule, registerLocaleData } from "@angular/common";
import { NgModule } from "@angular/core";
import localPt from '@angular/common/locales/pt';
import { ProdutoCountComponent } from './components/produto-count/produto-count.component';
import { ProdutoCardDetalheComponent } from './components/produto-card-detalhe/produto-card-detalhe.component';
import { EditarProdutoComponent } from './editar-produto/editar-produto.component';
import { ProdutoVitrineService } from './services/produto-vitrine.service';
import { ProdutosResolve } from './services/produtos.resolve';
registerLocaleData(localPt);


@NgModule({
    declarations: [
        ProdutoAppComponent,
        ProdutoDashboardComponent,
        ProdutoCardDetalheComponent,
        ProdutoCountComponent,
        EditarProdutoComponent
    ],
    imports: [
        CommonModule,
        ProdutoRoutingModule
    ],
    exports: [],
    providers: [
        ProdutoVitrineService,
        ProdutosResolve
    ]
})
export class ProdutoModule {}