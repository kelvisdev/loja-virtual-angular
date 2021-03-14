import { ProdutoVitrine } from './../models/produto-vitrine';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProdutoVitrineService } from './produto-vitrine.service';

@Injectable()
export class ProdutosResolve implements Resolve<ProdutoVitrine[]> {
    
    constructor(private produtoService: ProdutoVitrineService){}

    resolve(route: ActivatedRouteSnapshot) {
        return this.produtoService.obterTodos(route.params.estado);
    }
}