import { Component } from '@angular/core';

interface NavProps {
  link: string;
  name: string;
  exact: boolean;
  admin: boolean;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  nav: NavProps[] = [
    { 
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    { 
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    { 
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    { 
      link: '/produtos',
      name: 'Produtos',
      exact: true,
      admin: false
    }
  ];
}

