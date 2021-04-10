import { Component, OnInit } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MessageService} from "../../services/message.service";
import Swal from 'sweetalert2'

declare const L:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public titulo;
public coords=[40.631255,-3.177070];
public correo:any;
  constructor(public _MessageService:MessageService) { 
    this.titulo='Contacto';

    this.correo={
      nombre:'',
      email:'',
      asunto:'',
      mensaje:''
    };

  }

  ngOnInit(): void {
    var mymap = L.map('mapid').setView(this.coords, 25);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibW9uamVjaXRvMSIsImEiOiJja20xeHFyM24wYWUyMnByMHJ2MDBxMTcxIn0.-7I1jR81LGIlPdxSmkKSdA', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'
  }).addTo(mymap);
  
  let marker = L.marker(this.coords).addTo(mymap);
  
  marker.bindPopup("<b>Hola!</b><br>Puedes encontrarnos aquí!.").openPopup();
  }
  
  contactForm(form) {

    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire({
        title: 'Éxito!',
        text: 'El correo se ha enviado correctamente',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
    
    });
    
  }

  reset(formu){
  formu.form.reset();
  }

}
