import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comida } from '../model/comida.model';

@Injectable({
  providedIn: 'root'
})
// Obtengo los datos de  las rectas de una api publica
export class RecetasService {
    constructor(public _http : HttpClient) { }
        //obtengo el listado de recetas del recetario
        getListRecetas(letraInicio:string):Observable<Comida> {
            return this._http.get<Comida>("https://www.themealdb.com/api/json/v1/1/search.php?f=" + letraInicio);
  
}
}
