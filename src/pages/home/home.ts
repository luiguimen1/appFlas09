import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {MatePage} from '../mate/mate';
import {ListadoPage} from '../listado/listado';
import {LacamPage} from '../lacam/lacam';
import {QrPage} from '../qr/qr';
import {LeerqrPage} from '../leerqr/leerqr';
import {TextToSpeech} from '@ionic-native/text-to-speech';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController, private tts: TextToSpeech) {

    }

    IrRegistros() {
        // setroot
        //push
        this.navCtrl.setRoot(RegistroPage);
    }

    IrCalculadora() {
        this.navCtrl.push(MatePage);
    }

    IraListado() {
        this.navCtrl.push(ListadoPage);
    }

    IrCamara() {
        this.navCtrl.push(LacamPage);
    }

    irQR() {
        this.navCtrl.push(QrPage);
    }

    irLeer() {
        this.navCtrl.push(LeerqrPage);
    }

    decir(texto) {
        this.tts.speak(texto)
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
    }
    
    ionViewDidLoad() {
        this.decir("Bienvenido al su aplicación");
    }
}
