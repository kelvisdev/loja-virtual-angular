import { ProdutoVitrine } from './../models/produto-vitrine';
import { ProdutoVitrineService } from './../services/produto-vitrine.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styles: [
  ]
})
export class EditarProdutoComponent implements OnInit {

  produto: ProdutoVitrine | undefined;

  // Dados da rota ativa
  constructor(
    private route: ActivatedRoute,
    private produtoService: ProdutoVitrineService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        console.log(params['id']);
        this.produto = this.produtoService.obterPorId(params['id']);
      }
    );
  }

  salvar() {
    // fazer comunicação com o backend

    this.router.navigate(['/produtos']);
    // this.router.navigateByUrl('/produtos');
  }
}
