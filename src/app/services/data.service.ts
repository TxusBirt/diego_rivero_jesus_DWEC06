/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del servicio: Se realizar el CRUD a la bbdd donde guardo los datos de las listas (firebase realtime)
*/
import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RecetasElegidas, UsuarioClub } from '../model/usuarioClub.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private _httpUsuario:HttpClient) { }
  //obtengo todas las listas de  la bbdd firebase
  getListasFav():Observable<UsuarioClub>{
      return this._httpUsuario.get<UsuarioClub>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data.json");
  }
  //obtengo solo una receta de las listas de recetas favoritas que he generado
  searchLista(ListaId:any):Observable<any>{
    return this._httpUsuario.get<any>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data/"+ListaId+".json");
}
  //creo una lista en la bbdd de Firebas. tengo que utilizar put ya que con el post
  //en firebase genera el indice aleatoriamente y con el put tengo control sobre la denominación
  // de las listas
  create(usuario:UsuarioClub, listaNombre:any):Observable<UsuarioClub>{
      return this._httpUsuario.put<UsuarioClub>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data/"+listaNombre+".json", usuario)
  }
  //creo una receta en una de las listas generadas
  createReceta(receta:RecetasElegidas, nombreLista:string,indice:number){
    return this._httpUsuario.put<UsuarioClub>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data/"+nombreLista+"/recetasFavoritas/"+indice+".json", receta)

  }
  //actualizao una receta de las que están en las listas de usuarios
  //utlizo patch ya que me permite no borrar los campos que no actualizo
  updateReceta(receta:any, ListaId:any, id:any):Observable<any>{
    return this._httpUsuario.patch<any>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data/"+ListaId+"/recetasFavoritas/"+id+".json", receta)
  }
  deleteReceta( ListaId:UsuarioClub):Observable<UsuarioClub>{
    return this._httpUsuario.delete<UsuarioClub>("https://recetas-club-default-rtdb.europe-west1.firebasedatabase.app/data/"+ListaId.nombreLista+".json")
  
  }
}
