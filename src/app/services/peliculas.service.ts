import { Injectable } from '@angular/core';
import { Jsonp, Http } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Injectable()
export class PeliculasService {


  private apiKey  = '30e6c1d2299f039a123195c73423f7ca';
  private urlMoviedb = 'https://api.themoviedb.org/3';

  constructor( private jsonp: Jsonp,
               private http: Http) { }

  getPopulares() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb  }/movie/popular?api_key=30e6c1d2299f039a123195c73423f7ca&language=en-ES&page=1&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                    .map( res => res.json() );
  }
}
