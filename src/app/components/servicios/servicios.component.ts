import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
public titulo:string;
  constructor() {
    this.titulo='Servicios';
   }

  ngOnInit(): void {
  }

}
