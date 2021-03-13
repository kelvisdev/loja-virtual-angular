import { ProdutoCardDetalheComponent } from './../components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../components/produto-count/produto-count.component';
import { fromEvent, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Produto } from 'src/app/produtos/produto';
import { ProdutoService } from 'src/app/produtos/produtos.service';

@Component({
  selector: 'app-produto-dashboard',
  templateUrl: './produto-dashboard.component.html',
  styles: [
  ]
})
export class ProdutoDashboardComponent implements OnInit, AfterViewInit {

  @ViewChild(ProdutoCountComponent, { static: false } ) contador: ProdutoCountComponent;
  @ViewChild('teste', { static: false }) mensagemTela: ElementRef;

  @ViewChildren(ProdutoCardDetalheComponent) botoes: QueryList<ProdutoCardDetalheComponent>;

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

  ngAfterViewInit(): void {
    console.log('Objeto do contador: ', this.contador.contadorAtivos());
    

    let clickText: Observable<any> = fromEvent(this.mensagemTela.nativeElement, 'click');

    clickText.subscribe(() => {
      alert('Clicou no texto!')
      return;
    });

    console.log(this.botoes);
    this.botoes.forEach(p => {
      console.log(p.produto);      
    })
  }

  mudarStatus(event: Produto) {
    event.ativo = !event.ativo;
  }

}
