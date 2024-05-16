/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de crear las recetas dentro de las listas
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { DetalleService } from '../../services/detalle.service';
import { RecetasElegidas } from '../../model/usuarioClub.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-receta',
  templateUrl: './crear-receta.component.html',
  styleUrl: './crear-receta.component.css'
})
export class CrearRecetaComponent {
    // propiedad para controlar la aparicion de imputs en el formulario
    public mas:number=1;
    //propiedades de la clase Recetas Elegidas
    public nombreLista!:string;
    public indice!:number;
    public idMeal!: number;
    public nombreReceta!: string;
    public categoria!: string;
    public area!: string;
    public instrucciones!: string;
    public tag!: string;
    public youtube!: string;
    public ingrediente1!: string;
    public ingrediente2!: string;
    public ingrediente3!: string;
    public ingrediente4!: string;
    public ingrediente5!: string;
    public ingrediente6!: string;
    public ingrediente7!: string;
    public ingrediente8!: string;
    public ingrediente9!: string;
    public ingrediente10!: string;
    public ingrediente11!: string;
    public ingrediente12!: string;
    public ingrediente13!: string;
    public ingrediente14!: string;
    public ingrediente15!: string;
    public ingrediente16!: string;
    public ingrediente17!: string;
    public ingrediente18!: string;
    public ingrediente19!: string;
    public ingrediente20!: string;
    public medida1!: string;
    public medida2!: string;
    public medida3!: string;
    public medida4!: string;
    public medida5!: string;
    public medida6!: string;
    public medida7!: string;
    public medida8!: string;
    public medida9!: string;
    public medida10!: string;
    public medida11!: string;
    public medida12!: string;
    public medida13!: string;
    public medida14!: string;
    public medida15!: string;
    public medida16!: string;
    public medida17!: string;
    public medida18!: string;
    public medida19!: string;
    public medida20!: string;
    // inicicalizo una instancia de Recetas elegidas
    public recetaCrear: RecetasElegidas = new RecetasElegidas(0,"","","","","","","","","","",
                                          "","","","","","","","","","","",
                                          "","","","","","","","","","","",
                                          "","","","","","","","","","","",
                                          "","","","","","","","","");
    constructor(
      //inyecto los servicios para consultar las api y llevar infomracion de unos componenetes a otros
        private _crearService:DetalleService,
        private _dataService:DataService,
        private route:Router
    ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      this._crearService.crearReceta.subscribe({
      next:results => {
          this.nombreLista=results.nombreLista;
          this.indice=results.recetasFavoritas.length;
      }, 
      error: error => console.log(error)
      
      })
  }
  // creo la receta asignando los valores del formulario
  crearReceta(){
      this.recetaCrear.idMeal=this.idMeal;
      this.recetaCrear.strMeal=this.nombreReceta;
      this.recetaCrear.strCategory=this.categoria;
      this.recetaCrear.strArea=this.area;
      this.recetaCrear.strInstructions=this.instrucciones;
      this.recetaCrear.strTags=this.tag;
      this.recetaCrear.strYoutube=this.youtube;
      this.recetaCrear.strIngredient1=this.ingrediente1;
      this.recetaCrear.strIngredient2=this.ingrediente2;
      this.recetaCrear.strIngredient3=this.ingrediente3;
      this.recetaCrear.strIngredient4=this.ingrediente4;
      this.recetaCrear.strIngredient5=this.ingrediente5;
      this.recetaCrear.strIngredient6=this.ingrediente6;
      this.recetaCrear.strIngredient7=this.ingrediente7;
      this.recetaCrear.strIngredient8=this.ingrediente8;
      this.recetaCrear.strIngredient9=this.ingrediente9;
      this.recetaCrear.strIngredient10=this.ingrediente10;
      this.recetaCrear.strIngredient11=this.ingrediente11;
      this.recetaCrear.strIngredient12=this.ingrediente12;
      this.recetaCrear.strIngredient13=this.ingrediente13;
      this.recetaCrear.strIngredient14=this.ingrediente14;
      this.recetaCrear.strIngredient15=this.ingrediente15;
      this.recetaCrear.strIngredient16=this.ingrediente16;
      this.recetaCrear.strIngredient17=this.ingrediente17;
      this.recetaCrear.strIngredient18=this.ingrediente18;
      this.recetaCrear.strIngredient19=this.ingrediente19;
      this.recetaCrear.strIngredient20=this.ingrediente20;
      this.recetaCrear.strMeasure1=this.medida1;
      this.recetaCrear.strMeasure2=this.medida2;
      this.recetaCrear.strMeasure3=this.medida3;
      this.recetaCrear.strMeasure4=this.medida4;
      this.recetaCrear.strMeasure5=this.medida5;
      this.recetaCrear.strMeasure6=this.medida6;
      this.recetaCrear.strMeasure7=this.medida7;
      this.recetaCrear.strMeasure8=this.medida8;
      this.recetaCrear.strMeasure9=this.medida9;
      this.recetaCrear.strMeasure10=this.medida10;
      this.recetaCrear.strMeasure11=this.medida11;
      this.recetaCrear.strMeasure12=this.medida12;
      this.recetaCrear.strMeasure13=this.medida13;
      this.recetaCrear.strMeasure14=this.medida14;
      this.recetaCrear.strMeasure15=this.medida15;
      this.recetaCrear.strMeasure16=this.medida16;
      this.recetaCrear.strMeasure17=this.medida17;
      this.recetaCrear.strMeasure18=this.medida18;
      this.recetaCrear.strMeasure19=this.medida19;
      this.recetaCrear.strMeasure20=this.medida20; 
      console.log(this.idMeal);
      //creo la receta insertando los datos necesariso para localizar el sitio y la receta a insertar
      this._dataService.createReceta(this.recetaCrear,this.nombreLista, this.indice).subscribe({
          next:  results=>{
            console.log(results);
            //una vez creada la receta vuelvo a las listas
            this.route.navigate(['/listas'])
          },
          error: error=> console.log(error)
          })
    }
    // metodos para controlar la apiricion de los inputs
    sumarIngrediente() {
        if (this.mas < 20) {
          this.mas+=1
        } else {
          this.mas=20
        }
        
    }
    restarIngrediente() {
        if (this.mas > 1) {
          this.mas-=1
        } else {
          this.mas=1
        }
      
    }
}

