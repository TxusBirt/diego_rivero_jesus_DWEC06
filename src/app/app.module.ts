import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CrearRecetaComponent } from './components/crear-receta/crear-receta.component';
import { CrearListaUsuarioComponent } from './components/crear-lista-usuario/crear-lista-usuario.component';
import { DetalleRecetaComponent } from './components/detalle-receta/detalle-receta.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { ListasRecetasFavoritasComponent } from './components/listas-recetas-favoritas/listas-recetas-favoritas.component';
import { ListasGeneradasComponent } from './components/listas-generadas/listas-generadas.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { DataService } from './services/data.service';
import { RecetasService } from './services/recetas.service';
import { RecetasUsuarioService } from './services/recetas-usuario.service';
import { DetalleService } from './services/detalle.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CrearRecetaComponent,
    CrearListaUsuarioComponent,
    DetalleRecetaComponent,
    EdicionComponent,
    ListasRecetasFavoritasComponent,
    ListasGeneradasComponent,
    RecetasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule,
    RouterLink,
    NgxPaginationModule,
  
  ],
  providers: [DataService, RecetasService, RecetasUsuarioService, DetalleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
