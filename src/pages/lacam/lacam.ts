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
    imageURI:string;
    persona;
    estado:boolean;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private camera: Camera,
        private transfer: FileTransfer,
        public loadingCtrl: LoadingController) {
        this.calidad = 50;
        this.persona = this.navParams.get("data");
        console.log(this.persona);
        this.estado=false;
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LacamPage');
    }

    getPictureCamara() {
        this.estado=false;
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.DATA_URL,
            targetWidth: 500,
            targetHeight: 500,
            quality: this.calidad,
            encodingType: 0,
            allowEdit: true
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.laImagen(`data:image/jpeg;base64,${imageData}`);
                this.estado=true;
            })
            .catch(error => {
                console.error(error);
            });
    }
    mensje;
    getImagenSD() {
        this.estado=false;
        let options: CameraOptions = {
            destinationType: this.camera.DestinationType.FILE_URI,
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            targetWidth: 500,
            targetHeight: 500,
            quality: 100,
            encodingType: 0,
            allowEdit: true
        }
        this.camera.getPicture(options)
            .then(imageData => {
                this.imageURI = imageData;
                this.estado=true;
                return this.imageURI;
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
        fileTransfer.upload(this.imageURI, 'http://192.168.0.102/webflas09/CRTL/SubirFoto.php', options)
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
