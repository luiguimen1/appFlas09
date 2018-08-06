import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';

import {TextToSpeech} from '@ionic-native/text-to-speech';
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
        private barcodeScanner: BarcodeScanner, private tts: TextToSpeech) {
    }

    scanCode() {
        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;
            this.decir("El código es " + this.scannedCode);
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

    decir(texto) {
        this.tts.speak({
            text:texto,
            locale:"es-ES"
        })
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }

}
