import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styleUrls: ['./ng-switch.component.css']
})
export class NgSwitchComponent {
  titleNgSwitch: string = 'ngSwitch';

  condicional: number = 0;

  selecionarCondicional(pCondicional: number){
    this.condicional = pCondicional;
  }


}
