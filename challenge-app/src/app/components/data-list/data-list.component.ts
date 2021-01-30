import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})
export class DataListComponent implements OnInit {

  //almaceno mis lista en arreglos de tipo ': any'
  dataList: any = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    //subscribe es el metodo que ejecuta res y err
    this.dataService.getList().subscribe(
      //si me devuelves la rrespuesta muestra porr consola 
      res => {
        this.dataList = res;
      },
      err => console.error(err),
    )
  }

}
