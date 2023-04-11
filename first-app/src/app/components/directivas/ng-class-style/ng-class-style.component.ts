import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class-style',
  templateUrl: './ng-class-style.component.html',
  styleUrls: ['./ng-class-style.component.css']
})
export class NgClassStyleComponent {

  titleNgClassStyle: string = 'ngClass e ngStyle';
  testeClass!: boolean;

  alterarClasse(): void {
    this.testeClass = !this.testeClass;
  }

  cssH2VindoDoTS = {
    'color': 'green',
    'font-size.px': 20,
    'font-weight': 'bold'
  }
}
