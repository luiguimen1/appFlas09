import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

/**
 * Generated class for the CrearqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-crearqr',
    templateUrl: 'crearqr.html',
})
export class CrearqrPage {
    qrData;
    createdCode;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private barcodeScanner: BarcodeScanner) {
        this.createdCode = this.navParams.get("qr");
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad CrearqrPage');
        // this.createCode();
    }
    createCode() {
        this.createdCode = this.qrData;
    }
}
