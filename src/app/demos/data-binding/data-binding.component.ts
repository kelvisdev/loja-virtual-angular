import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorClique: number = 1;
  public urlImagem: string = "https://angular.io/assets/images/logos/angular/shield-large.svg";
  public nome: string = '';

  adicionaClique() {
    this.contadorClique++;
  }

  zerarContador() {
    this.contadorClique = 0;
  }

  handleKeyUp(event: any) {
    this.nome = event.target.value;
  }
}
