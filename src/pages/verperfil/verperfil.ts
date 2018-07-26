import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the VerperfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-verperfil',
    templateUrl: 'verperfil.html',
})
export class VerperfilPage {
    persona;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.persona = this.navParams.get("piso");
        console.table(this.persona);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad VerperfilPage');
    }

}
