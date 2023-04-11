import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filho',
  templateUrl: './filho.component.html',
  styleUrls: ['./filho.component.css']
})

export class FilhoComponent {
  @Input() titulo: string = 'Título do Filho';
  @Output() dadoEnviado = new EventEmitter;

  enviarDados(){
    let cliente = {
      nome: "Manoel",
      idade: 50,
      profissao: 'Engenheiro'
    };

    this.dadoEnviado.emit(cliente);
    //this.dadoEnviado.emit("Valor enviado do componente filho!");
  }
}
