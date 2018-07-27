import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConectarProvider} from '../../providers/conectar/conectar';
import {AlertController} from 'ionic-angular';
import {ToastController} from 'ionic-angular';


/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-registro',
    templateUrl: 'registro.html',
})
export class RegistroPage {

    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        public fb: FormBuilder,
        public conecta: ConectarProvider,
        private alertCtrl: AlertController,
        private toastCtrl: ToastController) {
        this.IniciarFormulario();
    }
    ForRegPersona: FormGroup;
    ionViewDidLoad() {
        console.log('ionViewDidLoad RegistroPage');
    }
    /**
     * Metodo que permite iniciar el formulariopara que quede con las opcioens de validacionsnes asigandas
     */
    IniciarFormulario() {
        this.ForRegPersona = this.fb.group({
            cc: ['', [Validators.required, Validators.pattern(/^[0-9]{5,10}$/)]],
            nombre: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ ]{3,50}$/)]],
            apellido: ['', [Validators.required, Validators.pattern(/^[a-zA-Z_-ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõöùúûüýøþÿÐdŒ ]{3,50}$/)]],
            Telefono: ['', [Validators.required, Validators.pattern(/^[0-9]{5,10}$/)]],
            Email: ['', [Validators.required, Validators.email]],
            fecha: ['', [Validators.required]]
        });
    }

    GuardarPersona() {
        let alert = this.alertCtrl.create({
            title: 'Confirme:',
            message: 'El registro del usuario en el sistema de infromación',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirmar',
                    handler: () => {
                        let estado = this.conecta.registrarPersona(this.ForRegPersona.value);
                        estado.subscribe(data => {
                            this.procesarRespuesta(data);
                        }, err => {
                            console.log(err);
                            this.presentAlert("Error #12", "Hay conexción con el servidor");
                        })
                    }
                }
            ]
        });
        alert.present();
    }



    procesarRespuesta(data) {
        if (data.success == "OK") {
            this.presentToast("la Persona fue Creada");
            this.IniciarFormulario();
        } else {
            this.presentAlert("Error # 13", "Hay un error de percistencia");
        }
    }

    irHome() {
        this.navCtrl.setRoot(HomePage);
    }

    presentToast(msn) {
        let toast = this.toastCtrl.create({
            message: msn,
            duration: 3000,
            position: 'top'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }


    presentAlert(titulo, mensaje) {
        let alert = this.alertCtrl.create({
            title: titulo,
            subTitle: mensaje,
            buttons: ['Cerrar']
        });
        alert.present();
    }

}
