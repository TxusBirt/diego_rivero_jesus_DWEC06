import { NgModule } from '@angular/core';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecetasComponent } from './components/recetas/recetas.component';
import { DetalleRecetaComponent } from './components/detalle-receta/detalle-receta.component';
import { EdicionComponent } from './components/edicion/edicion.component';
import { CrearRecetaComponent } from './components/crear-receta/crear-receta.component';
import { CrearListaUsuarioComponent } from './components/crear-lista-usuario/crear-lista-usuario.component';
import { ListasGeneradasComponent } from './components/listas-generadas/listas-generadas.component';
import { ListasRecetasFavoritasComponent } from './components/listas-recetas-favoritas/listas-recetas-favoritas.component';

const routes: Routes = [
  { path: "", component: HomeComponent},
  { path: "recetas", component:RecetasComponent },
  { path: "detalle", component: DetalleRecetaComponent },
  { path: "edicion", component: EdicionComponent },
  { path: "crearReceta", component: CrearRecetaComponent },
  { path: "crearUsuario", component:CrearListaUsuarioComponent },
  { path: "listas", component:ListasGeneradasComponent },
  { path: "recomiendo", component:ListasRecetasFavoritasComponent },
  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule, 
    RouterLink
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
