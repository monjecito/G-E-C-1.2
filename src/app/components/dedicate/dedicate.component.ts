import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dedicate',
  templateUrl: './dedicate.component.html',
  styleUrls: ['../contact/contact.component.css']
})
export class DedicateComponent implements OnInit {
public titulo:string;
  constructor() { 
    this.titulo='¿A qué nos dedicamos?'
  }

  ngOnInit(): void {
  }

}
