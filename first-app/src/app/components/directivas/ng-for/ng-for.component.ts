import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})

export class NgForComponent {
  titleNgFor: string = 'ngFor';

  times: string[] = ['Corinthians', 'Palmeiras', 'São Paulo', 'Santos'];

  objUsers = [
    {login: 'admin', senha: 'admin', email: 'admin@admin'},
    {login: 'manoel', senha: 'manoel', email: 'manoel@admin'},
    {login: 'maria', senha: 'maria', email: 'maria@admin'},
  ];

  usuarios: Array<User> = this.objUsers;
}

interface User {
  login: string;
  senha: string;
  email: string;
}

