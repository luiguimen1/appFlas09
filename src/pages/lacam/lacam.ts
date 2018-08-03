import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {LoadingController} from 'ionic-angular';
import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
/**
 * Generated class for the LacamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-lacam',
    templateUrl: 'lacam.html',
})
export class LacamPage {
    calidad;
    imageURI;
    persona;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private miCAM: Camera,
        private transfer: FileTransfer,
        public loadingCtrl: LoadingController) {
        this.calidad = 50;

        this.persona = this.navParams.get("data");
        console.log(this.persona);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LacamPage');
    }

    getPictureCamara() {
        this.imageURI=false;
        let options: CameraOptions = {
            destinationType: this.miCAM.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: this.calidad
        }
        this.miCAM.getPicture(options)
            .then(imageData => {
                 this.laImagen(`data:image/jpeg;base64,${imageData}`);
            })
            .catch(error => {
                console.error(error);
            });
    }

    getImagenSD() {
        this.imageURI=false;
        let options: CameraOptions = {
            destinationType: this.miCAM.DestinationType.FILE_URI,
            sourceType: this.miCAM.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 500,
            targetHeight: 500
        }
        this.miCAM.getPicture(options)
            .then(imageData => {
                this.laImagen(imageData);
            })
            .catch(error => {
                console.error(error);
            });
    }
    info;
    ruta;

    laImagen(porEsta) {
        this.imageURI = porEsta;
    }

    CargarImagen() {
        let loader = this.loadingCtrl.create({
            content: "<b>El archivo esta Cargado...</b>"
        });
        loader.present();
        const fileTransfer: FileTransferObject = this.transfer.create();
        var datos = {cc: this.persona.cc, type: 'persona'};
        let options: FileUploadOptions = {
            fileKey: 'ionicfile',
            fileName: 'ionicfile',
            chunkedMode: false,
            mimeType: "image/jpeg",
            headers: {},
            httpMethod: 'POST',
            params: datos
        }
        this.info = "Procesando";
        fileTransfer.upload(this.imageURI, 'http://192.168.0.225:8081/flas09/CRTL/SubirFoto.php', options)
            .then((data) => {
                this.actualizar(data);
                loader.dismiss();
            }, (err) => {
                loader.dismiss();
                this.info = " -> Error de Comunicación con el servidor";
                // Puede Colocar una alerta de que existe un problema con el servidor
            });
    }
    actualizar(data) {
        if (data.response != "no") {
            this.info = "La imagen fue cargada en el servidor";
        } else {
            this.info = "La imagen no fue cargada";
        }
    }

}
