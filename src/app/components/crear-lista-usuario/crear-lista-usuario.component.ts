/*
 Autor: Jesus Diego Rivero 
 Fecha:17/05/2024
 UD: 06
 Modulo: Desarrollo web entorno cliente
 Funcion del componente: Se encarga de crear las listas de recetas de los usuarios
*/


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UsuarioClub, RecetasElegidas } from '../../model/usuarioClub.model';
import { DataService } from '../../services/data.service';
import { RecetasUsuarioService } from '../../services/recetas-usuario.service';

@Component({
  selector: 'app-crear-lista-usuario',
  templateUrl: './crear-lista-usuario.component.html',
  styleUrl: './crear-lista-usuario.component.css'
})

export class CrearListaUsuarioComponent {
  //declaro observables para los servicios
  public usuarioLista$!: Observable<UsuarioClub>;
  public crearLista$!: Observable<UsuarioClub>;
  //declaro propeidades para crear una instancia de UsuarioClub
  public nombreLista!:string;
  public email!:string;
  public username!:string;
  public edicion:boolean=false;
  public passwordLista!: string;
  public recetasFavoritas!: RecetasElegidas[];
  public usuarioCrear!: UsuarioClub;
  public numeroUsuario!:any;
  public datos:any;
  
  constructor( 
      //inyecto servicios
      private _dataService:DataService,
      private _listaElegida:RecetasUsuarioService,
      private router: Router
  ) {}
  ngOnInit(): void {
      this.userList();
      
  }
  //metodo que obtiene todas las listas de de usuarios
  userList() {
      this.usuarioLista$ = this._dataService.getListasFav();
      this.usuarioLista$.subscribe(
          result => console.log(result))
  }
  // crea las listas de cada usuario
  crearUsuario() {
    
      this.recetasFavoritas= this._listaElegida.recomendarList;
      // al crear usuario compruebo que no se introduce el mismo nombre de lista que uno existente
      // intento obtener el regsitro de la bbdd con el nombre introducido
      // si existe me avis si no crea el usuarioLista
      //utilizo el servicio dataservice para constactar con la BBDD
      this.usuarioLista$ = this._dataService.searchLista(this.nombreLista);
      this.usuarioLista$.subscribe({ 
          next: results => {

                if (results!==null && this.nombreLista == results.nombreLista) {
                    //si coincide limpio los campos del formulario
                    this.nombreLista="";
                    this.email="";
                    this.username="";
                    this.passwordLista="";
                    //aviso de la coincidencia 
                    return alert("nombre lista repetido. Prueba otro nombre");} 
                else {
                    //si no coincide genero un usuarioLista en la BBDD
                    this.usuarioCrear = new UsuarioClub(this.nombreLista, this.username, this.email, this.passwordLista,this.edicion, this.recetasFavoritas);
                    console.log(this.usuarioCrear);
                    this.crearLista$ = this._dataService.create(this.usuarioCrear, this.nombreLista);
                    this.crearLista$.subscribe({
                        next: result => result,
                        error: error => alert("no se ha podido crear el usuario")
                  }),
                //limpio las propiedades y vacio el observable
                this.nombreLista="";
                this.email="";
                this.username="",
                this.passwordLista="", 
                this._listaElegida.vaciarLista();
        }},
        error: error => console.log(error)
      })
      //una vez que creo elusuario redireccino al home
      this.router.navigate(['/home'])
    }
}
