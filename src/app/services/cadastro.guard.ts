import { CadastroComponent } from './../demos/reactive-forms/cadastro/cadastro.component';
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class CadastroGuard implements CanDeactivate<CadastroComponent> {
    
    canDeactivate(component: CadastroComponent) {
        const formularioSujo = component.cadastroForm.dirty;
        if (formularioSujo) {
            return window.confirm('Tem certeza que deseja abandonar o preenchimento do formulario?');
        }

        return true;
    }
}