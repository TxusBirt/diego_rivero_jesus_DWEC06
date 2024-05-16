/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de traer las recetas que aprecen en el recetario
*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RecetasService } from '../../services/recetas.service';
import { RecetasUsuarioService } from '../../services/recetas-usuario.service';
import { DetalleService } from '../../services/detalle.service';
import { Comida, Receta } from '../../model/comida.model';
import { UsuarioClub } from '../../model/usuarioClub.model';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrl: './recetas.component.css'
})
export class RecetasComponent {
    public recetaList$!: Observable<Comida>;
    public primeraLetra: string="a";
    public listaRecetas!: Receta[];
    // propiedad para tener el menu de letras
    public abecedario: Array<string> = ["a", "b", "c", "h", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    public usuarioLista!:UsuarioClub;
    public permiso: boolean=false;
    public primeraPagina:number = 0;
    public page!:number;

    //inyecto los servicios
    constructor(
        private _servicioReceta:RecetasService, 
        private _servicioFavoritas:RecetasUsuarioService,
        private _detalleService:DetalleService,
        private route:Router
    ){}
  ngOnInit(): void {
      //inicializo el compoenete con las recetas y sin ver los botones de añadir 
      this.recetario();
      this.autorizar();
  }        
  //hace vicibles los botones para añadir recetas a la lista
  autorizar() {
      if (this.permiso==false){
        return this.permiso=true
      } else {
        return this.permiso=false
      }
      }
 
  //lista de recetas de la pestaña recetas
  recetario() {
      this.recetaList$ = this._servicioReceta.getListRecetas(this.primeraLetra);
      this.recetaList$.subscribe({
          next: result => {   
              this.listaRecetas=result.meals;
  
          },
          error: error => console.log(error)
      });

  }
    // filtro por primera letra y cargo la lista de recetas que empiezan por esa letra
    filtroLetra(primeraLetra:string) {
        this.primeraLetra=primeraLetra
        this.recetario()
    }
    //añado recetas a la lista de favoritas
    sumarRecomendacion(recetaFavorita:Receta) {
        this._servicioFavoritas.recomiendo(recetaFavorita);
    }
    //metodo para ver la receta en detalle
    ver(recetaFavorita:Receta) {
        this._detalleService.detalleReceta(recetaFavorita);
        this.route.navigate(['/detalle']);
    }
}



