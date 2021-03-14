import { ProdutoVitrineService } from './../services/produto-vitrine.service';
import { ProdutoCardDetalheComponent } from './../components/produto-card-detalhe/produto-card-detalhe.component';
import { ProdutoCountComponent } from './../components/produto-count/produto-count.component';
import { fromEvent, Observable } from 'rxjs';
import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ProdutoService } from 'src/app/produtos/produtos.service';
import { ProdutoVitrine } from '../models/produto-vitrine';

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

  constructor(private produtoService: ProdutoVitrineService) { }
    

  public produtos: ProdutoVitrine[];

  ngOnInit(): void {
    this.produtos = this.produtoService.obterTodos('');
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

  mudarStatus(event: ProdutoVitrine) {
    event.ativo = !event.ativo;
  }

}
