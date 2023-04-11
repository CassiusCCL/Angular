import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent {

  title: string = 'Data Binding Título';

  numero1: number = 2;
  numero2: number = 3;

  somar(pNumero1: number, pNumero2: number): number{
    return pNumero1 + pNumero2;
  };

  resultado: number = this.somar(this.numero1, this.numero2);

  retornarTexto(): string {
    return 'Hello World!'
  }

  urlImagem: string = 'https://www.trainning.com.br/img/trainning-brand.png';

  valorInput: string = 'Manoel';

  emitirAlerta(): void {
    alert('Clicou-me!');
  }

  valorToWay1: string = 'Curso Angular';
  valorToWay2: string = 'Curso React';
}
