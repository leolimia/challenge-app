import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';

import { DataFormComponent } from './components/data-form/data-form.component';
import { DataListComponent } from './components/data-list/data-list.component';
import { DataDeleteComponent } from './components/data-delete/data-delete.component';
import { DataModifyComponent } from './components/data-modify/data-modify.component';


import { DataService } from './services/data.service';
import { from } from 'rxjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    DataFormComponent,
    DataListComponent,
    DataDeleteComponent,
    DataModifyComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //con este modulo ya funciona el servicio
    HttpClientModule,
    NgbModule,
    FormsModule,

  ],
  providers: [
    DataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
