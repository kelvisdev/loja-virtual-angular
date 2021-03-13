import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: HomeComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },
  { path: 'produtos', component: ListaProdutoComponent },
  { path: 'cadastro', component: CadastroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
