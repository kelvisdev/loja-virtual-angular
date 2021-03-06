import { ProdutoVitrine } from './../../models/produto-vitrine';
import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Produto } from "src/app/produtos/produto";

@Component({
    selector: 'produto-card-detalhe',
    templateUrl: './produto-card-detalhe.component.html'
})

export class ProdutoCardDetalheComponent {
    @Input()
    produto: ProdutoVitrine;

    @Output()
    status: EventEmitter<any> = new EventEmitter();

    emitirEvento() {        
        this.status.emit(this.produto);
    }
}