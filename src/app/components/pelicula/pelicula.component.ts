import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  pelicula: any;
  backTo = '';
  busqueda = '';

  constructor( public _ps: PeliculasService,
               public router: ActivatedRoute  ) {

                this.router.params.subscribe( parametros => {
                    console.log(parametros);
                    this.backTo = parametros.pag;

                    if (parametros.busqueda) {
                      this.busqueda = parametros.busqueda;
                    }

                    this._ps.getPelicula( parametros.id )
                        .subscribe( pelicula => {
                                    console.log(pelicula);
                                    this.pelicula = pelicula;
                        });
                });

    }

  ngOnInit() {
  }

}
