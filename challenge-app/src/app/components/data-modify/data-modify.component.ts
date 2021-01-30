import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/models/data';
import { ActivatedRoute, Router } from '@angular/router';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-modify',
  templateUrl: './data-modify.component.html',
  styleUrls: ['./data-modify.component.css']
})
export class DataModifyComponent implements OnInit {

  currentDate: number = Date.now();

  data: Data = {
    id: 0,
    concepto: '',
    monto: 0,
    tipo: '',
    fecha: new Date(),
  };

  obj: any = [];

  constructor(private dataService: DataService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getOneData();
  }

  getOneData() {
    const params = this.activedRoute.snapshot.params;
    if (params.id) {
      this.dataService.getDataUser(params.id).subscribe(
        res => {
          this.obj = res;
          this.data = this.obj[0];
        },
        err => console.log(err)
      )
    }
  }

  updateData() {
    delete this.data.fecha;
    this.dataService.updateDataUser(this.data.id, this.data).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/users/add'])
      },
      err => console.error(err)
    )
  }
}


//arreglar problemas para actualizar datos en el archivo data-modify.component.ts y mejora de tablas con bootstrap"
