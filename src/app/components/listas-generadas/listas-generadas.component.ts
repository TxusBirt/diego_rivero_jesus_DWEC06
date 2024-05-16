/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de manejar las listas de recetas y 
 todas las funciones, editar, eliminar, crear recetas, etc
*/


import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DetalleService } from '../../services/detalle.service';
import { UsuarioClub } from '../../model/usuarioClub.model';
import { Receta } from '../../model/comida.model';

@Component({
  selector: 'app-listas-generadas',
  templateUrl: './listas-generadas.component.html',
  styleUrl: './listas-generadas.component.css'
})
export class ListasGeneradasComponent implements OnInit {
    //declaro un observable y propeidades que me permiten
    //manejar los datos
    public usuarioLista$!: Observable<any>;
    public listaRecetas!: Array<UsuarioClub>; 
    public nombreUsuario!: string;
    public nombreReceta!: string;
    public origenReceta!: string;
    public tags!: string;
    public password!: any;
    public deshabilitado:boolean=true;
    //inyecto los servicios
    constructor(
        private _dataservice:DataService,
        private _detalleservice:DetalleService,
        private route: Router
    ){}

    ngOnInit(): void {
      //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      //Add 'implements OnInit' to the class.
        this.userList();
    }
    //obtengo las listas
    userList() {
      this.usuarioLista$ = this._dataservice.getListasFav();
      this.usuarioLista$.subscribe({
        next: result => {console.log(result.jesus);
            this.listaRecetas=Object.values(result);
            console.log(this.listaRecetas)

        },
        error: error => console.log(error)
      })
      }
      //metodo para ver cada receta en detalle
      detalles(recetaFavorita:Receta) {
          this._detalleservice.detalleReceta(recetaFavorita);
          this.route.navigate(['/detalle']);
      }
      //metodo para editar las recetas
      edicion(recetaFavorita:Receta, lista:any, indice:number){
          this._detalleservice.envioEdicion(recetaFavorita, lista, indice);
          this.route.navigate(['/edicion']);
      }
      //metodo para crear las recetas de las listas
      crearReceta(lista:UsuarioClub){
          this._detalleservice.envioLista(lista);
          this.route.navigate(['/crearReceta']);
      }
      //metodo que habilita los botones de edicion si se introduce la
      //clave de edicion correctamente
      comprobar(lista:UsuarioClub){
          if (lista.passwordLista==this.password) {
              lista.edicion=true;
              this.password=null;
          }
      }
      eliminarReceta(usuario:UsuarioClub) {
        this._dataservice.deleteReceta(usuario).subscribe({
          next: results=>  { console.log( "registro eliminado");
          this.userList();
          },
          error: error => console.log(error)})
       
      }

}



