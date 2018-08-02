import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeGeocoder, NativeGeocoderReverseResult, NativeGeocoderForwardResult, NativeGeocoderOptions} from '@ionic-native/native-geocoder';
import {Geolocation, Geoposition} from '@ionic-native/geolocation';

declare var google;
/**
 * Generated class for the LocalizarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-localizar',
    templateUrl: 'localizar.html',
})
export class LocalizarPage {
    Long;
    Lati;
    direccion;
    mensaje;
    constructor(public navCtrl: NavController, public navParams: NavParams,
        private nativeGeocoder: NativeGeocoder,
        private geolocation: Geolocation) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LocalizarPage');
    }

    Traducir() {
        let options: NativeGeocoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.nativeGeocoder.forwardGeocode(this.direccion, options)
            .then((coordinates: NativeGeocoderForwardResult[]) => {
                this.loadMap(coordinates[0].latitude, coordinates[0].longitude);
            })
            .catch((error: any) => {
                this.Long = "Error";
                this.Lati = "Error";
                this.mensaje = 'Ejempplo cr 1 #23-76 BogotA';
            });
    }

    map;

    loadMap(lati, logi) {  
        let mapEle: HTMLElement = document.getElementById('map');
        let myLatLng = {lat: parseFloat(lati), lng: parseFloat(logi)};
        this.mensaje = 'la de la ubicacion ' + lati + ', Mi logitud es ' + logi;
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
                draggable: true,
                icon: "assets/youbi.png",
                title: 'Estoy Aqui!'
            });
            mapEle.classList.add('show-map');
        });
    }

}
