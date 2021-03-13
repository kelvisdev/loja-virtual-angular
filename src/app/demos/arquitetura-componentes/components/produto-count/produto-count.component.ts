import { Component, Input } from "@angular/core";
import { Produto } from "src/app/produtos/produto";


@Component({
    selector: 'produto-count',
    template: `
        <div>
            <h3>Produtos</h3>
            <div>
                Produtos Ativos: <strong>{{ contadorAtivos() }}</strong> no total de <strong>{{ produtos?.length }}</strong> produtos <br> <br>
            </div>
        </div>
    `
})

export class ProdutoCountComponent {
    @Input()
    produtos: Produto[];

    contadorAtivos(): number {
        if (!this.produtos) return 0;

        return this.produtos.filter((produto: Produto) => produto.ativo).length;
    }
}
