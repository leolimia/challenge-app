import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataListComponent } from './components/data-list/data-list.component';
import { DataFormComponent } from './components/data-form/data-form.component';
import { DataModifyComponent } from './components/data-modify/data-modify.component';

const routes: Routes = [
  {
    //como se llama nuesstra ruta
    path: '',
    redirectTo: '/users',
    //como la ruta inicial redirecciona a otro lugar lee tengo que agregaar 
    pathMatch: 'full',
  },
  {
    //creo una ruta llamada users
    path: 'users',
    component: DataListComponent,
  },
  {
    path: 'users/add',
    component: DataFormComponent,
  },
  {
    path: 'users/edit/:id',
    component: DataModifyComponent,

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
