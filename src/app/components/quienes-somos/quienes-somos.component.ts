import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.css']
})
export class QuienesSomosComponent implements OnInit {
public titulo:string;
  constructor() {
    this.titulo='¿Quiénes somos?'
   }

  ngOnInit(): void {
  }

}
