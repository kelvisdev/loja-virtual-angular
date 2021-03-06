import { FilmesComponent } from './demos/pipes/filmes/filmes.component';
import { NavegacaoModule } from './navegacao/navegacao.module';
import { ProdutoService } from './produtos/produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import { NgBrazil } from 'ng-brazil'; 
import { TextMaskModule } from 'angular2-text-mask';
import { CustomFormsModule } from 'ng2-validation'
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { AuthGuard } from './services/app.guard';
import { CadastroGuard } from './services/cadastro.guard';

import localPt from '@angular/common/locales/pt';
import { ImageFormaterPipe } from './demos/pipes/filmes/image.pipe';
import { FileSizePipe } from './demos/pipes/filmes/filesize.pipe';
registerLocaleData(localPt);


@NgModule({
  declarations: [
    AppComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent,
    CadastroComponent,
    FilmesComponent,    
    FileSizePipe,
    ImageFormaterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NavegacaoModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextMaskModule,
    NgBrazil,
    CustomFormsModule
  ],
  providers: [
    ProdutoService,
    AuthGuard,
    CadastroGuard
    // {provide: APP_BASE_HREF, useValue: '/admin/'}
    // {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
