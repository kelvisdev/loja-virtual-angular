import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutoService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit {


  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit(): void {
    this.produtoService.obterProdutos()
      .subscribe(p => {
        this.produtos = p;
        console.log(p);
      }, (error: any) => {
        console.log(error);
      });
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
