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

  getCartelera() {

    const url = `${ this.urlMoviedb  }/movie/now_playing?api_key=${this.apiKey}&language=en-Us&page=1&region=mx&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                    .map( res => res.json().results );

  }

  getPopulares() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb  }/movie/popular?api_key=${this.apiKey}&language=en-ES&page=1&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                    .map( res => res.json().results );
  }

  getPopularesTop() {
    // tslint:disable-next-line:max-line-length
    const url = `${ this.urlMoviedb  }/movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1&region=mx&callback=JSONP_CALLBACK`;
    return this.jsonp.get( url )
                    .map( res => res.json().results );
  }

  buscarPeliculas( texto: string ) {
      // tslint:disable-next-line:max-line-length
      const url = `${  this.urlMoviedb }/search/movie?api_key=${this.apiKey}&language=en-US&query=${ texto }&page=1&include_adult=false&callback=JSONP_CALLBACK`;
      return this.jsonp.get( url )
                 .map( res => res.json().results );
  }
}
