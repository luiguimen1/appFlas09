import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {LoadingController} from 'ionic-angular';
import {VerperfilPage} from '../verperfil/verperfil';

/**
 * Generated class for the ListadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-listado',
    templateUrl: 'listado.html',
})
export class ListadoPage {
    Num1;
    edificio;
    constructor(public navCtrl: NavController, public navParams: NavParams, private acceso: ConectarProvider, public loadingCtrl: LoadingController) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad ListadoPage');
    }

    traerListado() {
        let conecta = this.acceso.TraerLista(this.Num1);
        const loader = this.loadingCtrl.create({
            content: "Se esta procesado su solicitud"
        });
        loader.present();
        conecta.subscribe(data => {
            loader.dismiss();
            this.proceso(data);
        }, err => {
            loader.dismiss();
            console.log(err);
        });
    }


    proceso(data) {
        this.edificio = Array();
        for (let i = 0; i < data.row; i++) {
            this.edificio.push(data[i]);
        }
    }


    verPerfil(piso) {
        let local = {
            piso: piso
        };
        this.navCtrl.push(VerperfilPage, local);
    }




}
