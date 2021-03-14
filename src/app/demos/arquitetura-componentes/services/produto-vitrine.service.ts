import { ProdutoVitrine } from './../models/produto-vitrine';
import { Injectable } from '@angular/core';

@Injectable()
export class ProdutoVitrineService {

    produtos: ProdutoVitrine[];

    constructor() {

        this.produtos = [{
            id: 1,
            nome: 'Teste',
            ativo: true,
            valor: 100,
            imagem: 'celular.jpg'
          },
          {
            id: 2,
            nome: 'Teste 2',
            ativo: true,
            valor: 200,
            imagem: 'gopro.jpg'
          },
          {
            id: 3,
            nome: 'Teste 3',
            ativo: true,
            valor: 300,
            imagem: 'laptop.jpg'
          },
          {
            id: 4,
            nome: 'Teste 4',
            ativo: true,
            valor: 400,
            imagem: 'mouse.jpg'
          },
          {
            id: 5,
            nome: 'Teste 5',
            ativo: true,
            valor: 500,
            imagem: 'teclado.jpg'
          },
          {
            id: 6,
            nome: 'Teste 6',
            ativo: false,
            valor: 600,
            imagem: 'headset.jpg'
          }];        
    }

    obterTodos(estado: string): ProdutoVitrine[] {
    
      if (estado === 'ativos') {
        return this.produtos.filter(produto => produto.ativo);
      }
  
      return this.produtos;
    }
    
    obterPorId(id: number): ProdutoVitrine | undefined {
        const produto = this.produtos.find((produto) => produto.id == id);

        return produto ? produto : undefined;
    }
}