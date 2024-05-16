/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: se encraga de la logica detras de la visualizacion de las recetas al completo
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetalleService } from '../../services/detalle.service';
@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.component.html',
  styleUrl: './detalle-receta.component.css'
})
export class DetalleRecetaComponent {
    //declaro proiedad para poder mover los datos de la receta
    public receta!: any;

    constructor(
        // inyecto los servicios
        //uno para mover datos y otro para redirigir
        private _detalleService:DetalleService,
        private route:Router
    ){}
    ngOnInit(): void {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        //controlo el cambio de estado de los datos
        this._detalleService.recetas.subscribe({
            next:results => {
                this.receta = results;
            }, 
            error: error=> console.log(error)});

    }
    //accion a realziar cuando pulso el boton para cerrar la ficha
    cerrar() {
      this._detalleService.cerrarReceta();
      this.route.navigate(['/recetas'])

    }

}
