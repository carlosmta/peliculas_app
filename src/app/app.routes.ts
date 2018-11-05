import { RouterModule, Routes } from '@angular/router';
import { BuscarComponent } from './components/buscar/buscar.component';
import { HomeComponent } from './components/home/home.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';


const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'buscar', component: BuscarComponent },
    { path: 'buscar/:texto', component: BuscarComponent },
    { path: 'pelicula/:id/:pag', component: PeliculaComponent },
    { path: 'pelicula/:id/:pag/:busqueda', component: PeliculaComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const approuting = RouterModule.forRoot(routes);
