import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: SobreComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },
  { path: 'produtos', component: ListaProdutoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
