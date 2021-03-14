import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: HomeComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },  
  { path: 'cadastro', component: CadastroComponent },
  { path: 'produtos', 
          loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
          .then(m => m.ProdutoModule) 
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
