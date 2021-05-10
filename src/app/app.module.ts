import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {routing, appRoutingProviders} from "./app.routing";
import {MessageService} from "./services/message.service";
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { DedicateComponent } from './components/dedicate/dedicate.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EficienciaComponent } from './components/eficiencia/eficiencia.component';
import { TelemedidaLedsComponent } from './components/telemedida-leds/telemedida-leds.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    DedicateComponent,
    NavbarComponent,
    QuienesSomosComponent,
    ServiciosComponent,
    EficienciaComponent,
    TelemedidaLedsComponent
  ],
  imports: [
    BrowserModule,
   
      routing,
      HttpClientModule,
      FormsModule,
  ],
  providers: [appRoutingProviders,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
