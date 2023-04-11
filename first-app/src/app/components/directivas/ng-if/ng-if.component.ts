import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent {
  titleNg: string = 'ngIf';

  textoBotao: string = 'Mostrar';

  ocultar = true;

  arrayAny: Array<any> = [];

  esconderElemento(){
    this.ocultar = !this.ocultar;
    if (this.ocultar) {
      this.textoBotao = 'Mostrar';
    }
    else {
      this.textoBotao = 'Esconder';
    };
  };

  adiconarItem() {
    this.arrayAny.push(this.arrayAny.length + 1);
    console.log(this.arrayAny[this.arrayAny.length - 1]);
  }

  removerItem() {
    this.arrayAny.splice(this.arrayAny.length - 1, 1);
  }
};
