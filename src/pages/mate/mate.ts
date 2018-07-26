import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the MatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-mate',
    templateUrl: 'mate.html',
})
export class MatePage {
    Num1;
    Num2;
    Resultado;
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MatePage');
        this.Resultado = "Que operacion quiere realizar??";
    }
    suma() {
        this.Resultado = parseFloat(this.Num1) + parseFloat(this.Num2);
    }

    resta() {
        this.Resultado = parseFloat(this.Num1) - parseFloat(this.Num2);
    }

    tabla() {
        this.edificio = new Array();
        this.Num1 = parseFloat(this.Num1);
        for (let i = 1; i <= this.Num2; i++) {
            let piso = {
                numero: this.Num1,
                item: i,
                resul: (this.Num1 * i)
            };
            this.edificio.push(piso);
        }
        console.table(this.edificio);
    }

    dia() {
        switch (this.Num1) {
            case '1':
                this.Resultado = " Es Lunes";
                break;
            case '2':
                this.Resultado = " Es Martes";
                break;
            case '3':
                this.Resultado = " Es Miercoles";
                break;
            case '4':
                this.Resultado = " Es Jueves";
                break;
            case '5':
                this.Resultado = " Es Viernes";
                break;
            case '6':
                this.Resultado = " Es Sabado";
                break;
            case '7':
                this.Resultado = " Es Domingo";
                break;
            default:
                this.Resultado = " No es un dia de la semana";
                break;
        }
    }

}
