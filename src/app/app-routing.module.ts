import { AuthGuard } from './services/app.guard';
import { NotFoundComponent } from './navegacao/not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';
import { CadastroComponent } from './demos/reactive-forms/cadastro/cadastro.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CadastroGuard } from './services/cadastro.guard';


const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch: 'full' },  
  { path: 'home', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'sobre', component: HomeComponent },
  { path: 'feature-data-binding', component: DataBindingComponent },  
  { path: 'cadastro', component: CadastroComponent, canDeactivate: [CadastroGuard] },
  { path: 'produtos', 
          loadChildren: () => import('./demos/arquitetura-componentes/produto.module')
          .then(m => m.ProdutoModule) 
  },
  { path: 'admin', 
          loadChildren: () => import('./admin/admin.module')
          .then(m => m.AdminModule),
          canLoad: [AuthGuard],
          canActivate: [AuthGuard]
  },

  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
