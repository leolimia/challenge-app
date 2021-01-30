import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})


export class DataFormComponent implements OnInit {

  currentDate: number = Date.now();

  success: boolean = false;

  dataList: any = [];

  data: Data = {
    id: 0,
    concepto: '',
    monto: 0,
    tipo: '',
    fecha: new Date(),
  }

  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  saveData() {
    //automaticamente creo fecha y 'id' por eso los elimino solo para esta funcion
    delete this.data.id;
    delete this.data.fecha;
    this.dataService
    this.dataService.saveDataUser(this.data).subscribe(
      res => {
        console.log(res);
        this.getData();
        this.router.navigate(['/users/add']);
      },
      err => console.error(err)
    )
  }

  deleteInfo(id: string) {
    this.dataService.deleteDataUser(id).subscribe(
      res => {
        console.log(res);
        this.getData();
      },
      err => console.error(err),
    )
  }

  getData() {
    //subscribe es el metodo que ejecuta res y err
    this.dataService.getList().subscribe(
      //si me devuelves la rrespuesta muestra porr consola 
      res => {
        this.dataList = res;
      },
      err => console.error(err),
    )
  }

  comeBack() {
    this.router.navigate(['/users']);
  }

}
