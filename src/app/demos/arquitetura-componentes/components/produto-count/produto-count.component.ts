import { ProdutoVitrine } from './../../models/produto-vitrine';
import { Component, Input } from "@angular/core";
import { Produto } from "src/app/produtos/produto";
import { Router } from '@angular/router';


@Component({
    selector: 'produto-count',
    template: `
        <div>
            <h3>Produtos</h3>
            <div>
                Produtos Ativos: <strong>{{ contadorAtivos() }}</strong> no total de <strong>{{ produtos?.length }}</strong> produtos <br> <br>
                <span class="badge badge-primary">
                    <!-- <a (click)="filtrarAtivos()">ativos</a> -->
                    <!-- <a [routerLink]="['/produtos/ativos']" class="btn btn-primary">ativos</a> -->
                </span>                
            </div>
        </div>
    `
})

export class ProdutoCountComponent {
    @Input()
    produtos: ProdutoVitrine[];

    contadorAtivos(): number {
        if (!this.produtos) return 0;

        return this.produtos.filter((produto: ProdutoVitrine) => produto.ativo).length;
    }
}
