import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {RegistroPage} from '../registro/registro';
import {MatePage} from '../mate/mate';
import {ListadoPage} from '../listado/listado';
import {LacamPage} from '../lacam/lacam';
@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    IrRegistros() {
        // setroot
        //push
        this.navCtrl.setRoot(RegistroPage);
    }
    
    IrCalculadora(){
        this.navCtrl.push(MatePage);
    }
    
    IraListado(){
        this.navCtrl.push(ListadoPage);
    }
    
    IrCamara(){
        this.navCtrl.push(LacamPage);
    }

}
