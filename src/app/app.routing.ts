import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";


import {ContactComponent} from "./components/contact/contact.component";
import {DedicateComponent} from "./components/dedicate/dedicate.component";
import { HomeComponent } from './components/home/home.component';
import { QuienesSomosComponent } from './components/quienes-somos/quienes-somos.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EficienciaComponent } from './components/eficiencia/eficiencia.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'que-hacemos', component: DedicateComponent},
    {path:'quienes-somos',component:QuienesSomosComponent},
    {path: 'contacto', component: ContactComponent},
    {path: 'servicios', component:ServiciosComponent},
    {path: 'eficiencia-energetica', component: EficienciaComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any>=RouterModule.forRoot(appRoutes);