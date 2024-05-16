/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de generar las listas con las recetas del recetario
*/
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Receta } from '../../model/comida.model';
import { RecetasUsuarioService } from '../../services/recetas-usuario.service';

@Component({
  selector: 'app-listas-recetas-favoritas',
  templateUrl: './listas-recetas-favoritas.component.html',
  styleUrl: './listas-recetas-favoritas.component.css'
})
export class ListasRecetasFavoritasComponent {
    //inicicalizo la lista odnde se guaradn las recetas favoritas
    public recomendacion: Receta[] = [];
    
    constructor(
        //inyecto servicios
        private _recomendacionService:RecetasUsuarioService,
        private router: Router
    ){}

    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //obtengo los datos de las listas
        this._recomendacionService.recetas.subscribe(
            results => this.recomendacion = results
            );
        
    }
    //añado recetas  a la lista
    guardarLista () {
        if (this.recomendacion.length>0) {
            this._recomendacionService.recomendarList=this.recomendacion;
            this.router.navigate(["/crearUsuario"]);
        } else {alert ("Crea tu lista no esperes más")
                this.router.navigate(["/recetas"]);
        }
    }
    //elimino recetas de la  lista
    quitar(indice:number) {
        this._recomendacionService.deleteReceta(indice);
    }
}

