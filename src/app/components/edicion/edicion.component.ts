/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de posibilitar la edicion de las recetas
*/

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Receta } from '../../model/comida.model';
import { DetalleService } from '../../services/detalle.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edicion',
  templateUrl: './edicion.component.html',
  styleUrl: './edicion.component.css'
})
export class EdicionComponent {
  //declaro las propiedades de la receta
    public mas:number=1;
    public recetaEdicion!:Receta;
    public indice!: number;
    public nombreLista!:string;
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
  
    constructor(
        //inyecto los servicios, uno para llamar a la api y otro para
        //enviar los datos
        private _detalleService:DetalleService,
        private _dataService:DataService,
        private route: Router
    ) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
      //primero obtengo los datos existentes y los coloco en el formulario
      this._detalleService.edicionComida.subscribe({
          //Los datos que obtengo es una lista de 3 valores,
          // 1- la receta de la clase eceta, 2-nombre d ela lista tipo string y 3-el indice dentro de la propiedad recetasFavoritas
          next:results => { console.log(results);
            if (results[0]==null){
                this.route.navigate(['/listas'])
            } else {
                this.recetaEdicion=results[0];
                this.idMeal=this.recetaEdicion.idMeal;
                this.nombreReceta=this.recetaEdicion.strMeal;
                this.categoria=this.recetaEdicion.strCategory;
                this.area=this.recetaEdicion.strArea;
                this.instrucciones=this.recetaEdicion.strInstructions;
                this.tag=this.recetaEdicion.strTags;
                this.youtube=this.recetaEdicion.strYoutube;
                this.ingrediente1=this.recetaEdicion.strIngredient1;
                this.ingrediente2=this.recetaEdicion.strIngredient2;
                this.ingrediente3=this.recetaEdicion.strIngredient3;
                this.ingrediente4=this.recetaEdicion.strIngredient4;
                this.ingrediente5=this.recetaEdicion.strIngredient5;
                this.ingrediente6=this.recetaEdicion.strIngredient6;
                this.ingrediente7=this.recetaEdicion.strIngredient7;
                this.ingrediente8=this.recetaEdicion.strIngredient8;
                this.ingrediente9=this.recetaEdicion.strIngredient9;
                this.ingrediente10=this.recetaEdicion.strIngredient10;
                this.ingrediente11=this.recetaEdicion.strIngredient11;
                this.ingrediente12=this.recetaEdicion.strIngredient12;
                this.ingrediente13=this.recetaEdicion.strIngredient13;
                this.ingrediente14=this.recetaEdicion.strIngredient14;
                this.ingrediente15=this.recetaEdicion.strIngredient15;
                this.ingrediente16=this.recetaEdicion.strIngredient16;
                this.ingrediente17=this.recetaEdicion.strIngredient17;
                this.ingrediente18=this.recetaEdicion.strIngredient18;
                this.ingrediente19=this.recetaEdicion.strIngredient19;
                this.ingrediente20=this.recetaEdicion.strIngredient20;
                this.medida1=this.recetaEdicion.strMeasure1;
                this.medida2=this.recetaEdicion.strMeasure2;
                this.medida3=this.recetaEdicion.strMeasure3;
                this.medida4=this.recetaEdicion.strMeasure4;
                this.medida5=this.recetaEdicion.strMeasure5;
                this.medida6=this.recetaEdicion.strMeasure6;
                this.medida7=this.recetaEdicion.strMeasure7;
                this.medida8=this.recetaEdicion.strMeasure8;
                this.medida9=this.recetaEdicion.strMeasure9;
                this.medida10=this.recetaEdicion.strMeasure10;
                this.medida11=this.recetaEdicion.strMeasure11;
                this.medida12=this.recetaEdicion.strMeasure12;
                this.medida13=this.recetaEdicion.strMeasure13;
                this.medida14=this.recetaEdicion.strMeasure14;
                this.medida15=this.recetaEdicion.strMeasure15;
                this.medida16=this.recetaEdicion.strMeasure16;
                this.medida17=this.recetaEdicion.strMeasure17;
                this.medida18=this.recetaEdicion.strMeasure18;
                this.medida19=this.recetaEdicion.strMeasure19;
                this.medida20=this.recetaEdicion.strMeasure20;  
                this.nombreLista=results[1];
                this.indice=results[2];
        }
          }, 
          error: error=> console.log(error)})
  }

  edicionReceta(){
        // envio los datos editados
        
        this.recetaEdicion.idMeal=this.idMeal;
        this.recetaEdicion.strMeal=this.nombreReceta;
        this.recetaEdicion.strCategory=this.categoria;
        this.recetaEdicion.strArea=this.area;
        this.recetaEdicion.strInstructions=this.instrucciones;
        this.recetaEdicion.strTags=this.tag;
        this.recetaEdicion.strYoutube=this.youtube;
        this.recetaEdicion.strIngredient1=this.ingrediente1;
        this.recetaEdicion.strIngredient2=this.ingrediente2;
        this.recetaEdicion.strIngredient3=this.ingrediente3;
        this.recetaEdicion.strIngredient4=this.ingrediente4;
        this.recetaEdicion.strIngredient5=this.ingrediente5;
        this.recetaEdicion.strIngredient6=this.ingrediente6;
        this.recetaEdicion.strIngredient7=this.ingrediente7;
        this.recetaEdicion.strIngredient8=this.ingrediente8;
        this.recetaEdicion.strIngredient9=this.ingrediente9;
        this.recetaEdicion.strIngredient10=this.ingrediente10;
        this.recetaEdicion.strIngredient11=this.ingrediente11;
        this.recetaEdicion.strIngredient12=this.ingrediente12;
        this.recetaEdicion.strIngredient13=this.ingrediente13;
        this.recetaEdicion.strIngredient14=this.ingrediente14;
        this.recetaEdicion.strIngredient15=this.ingrediente15;
        this.recetaEdicion.strIngredient16=this.ingrediente16;
        this.recetaEdicion.strIngredient17=this.ingrediente17;
        this.recetaEdicion.strIngredient18=this.ingrediente18;
        this.recetaEdicion.strIngredient19=this.ingrediente19;
        this.recetaEdicion.strIngredient20=this.ingrediente20;
        this.recetaEdicion.strMeasure1=this.medida1;
        this.recetaEdicion.strMeasure2=this.medida2;
        this.recetaEdicion.strMeasure3=this.medida3;
        this.recetaEdicion.strMeasure4=this.medida4;
        this.recetaEdicion.strMeasure5=this.medida5;
        this.recetaEdicion.strMeasure6=this.medida6;
        this.recetaEdicion.strMeasure7=this.medida7;
        this.recetaEdicion.strMeasure8=this.medida8;
        this.recetaEdicion.strMeasure9=this.medida9;
        this.recetaEdicion.strMeasure10=this.medida10;
        this.recetaEdicion.strMeasure11=this.medida11;
        this.recetaEdicion.strMeasure12=this.medida12;
        this.recetaEdicion.strMeasure13=this.medida13;
        this.recetaEdicion.strMeasure14=this.medida14;
        this.recetaEdicion.strMeasure15=this.medida15;
        this.recetaEdicion.strMeasure16=this.medida16;
        this.recetaEdicion.strMeasure17=this.medida17;
        this.recetaEdicion.strMeasure18=this.medida18;
        this.recetaEdicion.strMeasure19=this.medida19;
        this.recetaEdicion.strMeasure20=this.medida20; 
        this._dataService.updateReceta(this.recetaEdicion,this.nombreLista,this.indice).subscribe({
          next:  results=>{console.log(results);
              this._detalleService.borrarDatosEdicion();
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

