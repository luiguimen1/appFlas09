import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

/*
  Generated class for the ConectarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConectarProvider {

    constructor(public http: HttpClient) {
        console.log('Hello ConectarProvider Provider');
    }
    options = {
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };
    url = "http://192.168.0.225:8081/flas09/";
    /**
     * Metodo que permite traer un numero especifico de datos
     */
    TraerLista(Cuantos) {
        return this.http.get('https://randomuser.me/api/?results=' + Cuantos);
    }
    /**
     * Metodo que permite almcenar en la base de datos a un Persona 
     */
    registrarPersona(Persona) {
        Persona.id = "null";
        return this.http.post(this.url + "CRTL/persona/CrearPersona.php", JSON.stringify(Persona), this.options);
    }

}
