// Import Padrão

import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import Components

import { HeaderComponent } from './components/header/header.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { PaiComponent } from './components/input-output/pai/pai.component';
import { FilhoComponent } from './components/input-output/pai/filho/filho.component';
import { DirectivaPaiComponent } from './components/directivas/directiva-pai/directiva-pai.component';

const rotas: Routes = [
  { path: '', component: DataBindingComponent },
  //{ path: 'header', component: HeaderComponent }
  { path: 'input-output', component: PaiComponent },
  { path: 'directivas', component: DirectivaPaiComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(rotas)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
