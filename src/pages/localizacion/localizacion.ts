import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';

/**
 * Generated class for the LocalizacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;

@IonicPage()
@Component({
    selector: 'page-localizacion',
    templateUrl: 'localizacion.html',
})
export class LocalizacionPage {
    Direcion;
    latitud;
    longitud;
    constructor(public navCtrl: NavController,
        public navParams: NavParams,
        private nativeGeocoder: NativeGeocoder,
        private geolocation: Geolocation) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LocalizacionPage');
    }
    Ubicar() {
        let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(this.Direcion, options)
            .then((coordinates: NativeGeocoderForwardResult[]) => {
                this.cambiar(coordinates[0].latitude,coordinates[0].longitude );
            })
            .catch((error: any) => {
                //this.mensaje = "hay un error";
            });
    }

    cambiar(lat, log) {
        this.latitud=lat;
        this.longitud=log;
        this.loadMap(lat, log); 
    }
    map;
    loadMap(lati, logi) {  
        let mapEle: HTMLElement = document.getElementById('map');
        let myLatLng = {lat: parseFloat(lati), lng: parseFloat(logi)};
        // create map
        this.map = new google.maps.Map(mapEle, {
            center: myLatLng,
            zoom: 12,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        let marker;
        google.maps.event.addListenerOnce(this.map, 'idle', () => {
            marker = new google.maps.Marker({
                position: myLatLng,
                map: this.map,
                title: 'Estoy Aqui!'
            });
            mapEle.classList.add('show-map');
        });
    }
}
