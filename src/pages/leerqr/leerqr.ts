import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
/**
 * Generated class for the LeerqrPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-leerqr',
    templateUrl: 'leerqr.html',
})
export class LeerqrPage {
    scannedCode = null;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private barcodeScanner: BarcodeScanner) {
    }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
            /**
             * Aqui puede asiganar o crear enlaces a la BD por medio del provider
             */
        }, (err) => {
            console.log('Error: ', err);
        });
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LeerqrPage');
    }

}
