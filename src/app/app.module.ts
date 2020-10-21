import { ProdutoService } from './produtos/produtos.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { APP_BASE_HREF } from '@angular/common';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localPt from '@angular/common/locales/pt'

registerLocaleData(localPt);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    SobreComponent,
    ContatoComponent,
    DataBindingComponent,
    ListaProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ProdutoService,
    {provide: APP_BASE_HREF, useValue: '/admin/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
