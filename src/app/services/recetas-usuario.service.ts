/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de gestionar los datos de las listas
 para que sean usados por los componentes encargados de generar las listas
*/
import { Injectable } from '@angular/core';
import { Receta } from '../model/comida.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RecetasUsuarioService {
  // array del que uso para incluir las recetas favoritas
  public recomendarList: Array<Receta>=[];
  // genero futuro observable con valor inicial lista vacia
  private _comidas: BehaviorSubject<Receta[]>;
  constructor( ) { 
      this._comidas = new BehaviorSubject<Receta[]>([]);
  }
  //convierto en observable para seguir su estado
  get recetas() {
    return this._comidas.asObservable();
  }
  //recetas que incluyo en la lista
  recomiendo(receta: Receta) {
      this.recomendarList.push(receta);
      this._comidas.next(this.recomendarList);
  }
  //borro las recetas que no quiero
  deleteReceta ( index:number) {
    this.recomendarList.splice(index,1);
 

  }
  // vacio la lista para un nuevo servicio
  vaciarLista ( ) {
    this.recomendarList=[];
    this._comidas.next(this.recomendarList);
  }
}

