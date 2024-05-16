/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del servicio: Se encarga de la gestion de los datos de las listas para realziar el CRUD
*/

import { Injectable } from '@angular/core';
import { Receta } from '../model/comida.model';
import { BehaviorSubject } from 'rxjs';
import { UsuarioClub } from '../model/usuarioClub.model';
@Injectable({
  providedIn: 'root'
})
export class DetalleService {
    //Inicializo tres propiedades cada una la usaré en un servicio difreente
    public detalle: Receta= new Receta(0,"","","","","","","","","","","",
                                      "","","","","","","","","","","","",
                                      "","","","","","","","","","","","",
                                      "","","","","","","","","","","","",
                                      "","","","","")

    public listaDatos:Array<any>=[];
    public listaElegida:UsuarioClub= new UsuarioClub("", "", "", "",false, []);
    //por cada propiedad de la que quiero ver sus cambios 
    //inicializo un behaviorsubject
    private _edicionComida: BehaviorSubject<Array<any>>;
    private _comidaDetalle: BehaviorSubject<Receta>;
    private _listaElegida: BehaviorSubject<any>;
    constructor( ) { 
        this._comidaDetalle = new BehaviorSubject<Receta>(this.detalle);
        this._edicionComida = new BehaviorSubject<Array<any>>(this.listaDatos);
        this._listaElegida = new BehaviorSubject<UsuarioClub>(this.listaElegida);
    }
    //genero 3 observables uno por cada acción a realizar
    get recetas() {
        return this._comidaDetalle.asObservable();
    }
    get edicionComida() {
        return this._edicionComida.asObservable();
    }
    get crearReceta() {
        return this._listaElegida.asObservable();
    }
    //metodos para procesar los datos según conveniencia
    //primera acción trasladar los datos para poder ver las recetas en detalle
    detalleReceta(receta: Receta) {
        this.detalle=receta;
        //envío el estdo de la propiedad una vez ejecutado el servicio
        this._comidaDetalle.next(this.detalle);
    }
    // limpio la propiedad para poder realziar otra vez la acción
    cerrarReceta(){
        this.detalle=new Receta(0,"","","","","","","","","","",
                                "","","","","","","","","","","",
                                "","","","","","","","","","","",
                                "","","","","","","","","","","",
                                "","","","","","","","","");
        this._comidaDetalle.next(this.detalle);
    }
    // otro servico para editar las recetas de las listas
    envioEdicion(receta: Receta, lista:any, index:any) {
        this.listaDatos= [receta, lista, index];
        this._edicionComida.next(this.listaDatos);
    }
    //inicializo una vez ejecutado el servicio
    borrarDatosEdicion(){
    this.listaDatos= [];
    this._edicionComida.next(this.listaDatos);
    }
    //ultimo servicio envio de listas
    envioLista(lista:UsuarioClub){
        this.listaElegida=lista;
        this._listaElegida.next(this.listaElegida);

    }
}
