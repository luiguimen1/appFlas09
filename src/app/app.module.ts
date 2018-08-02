import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {RegistroPage} from '../pages/registro/registro';
import {MatePage} from '../pages/mate/mate';
import {ConectarProvider} from '../providers/conectar/conectar';

import {ListadoPage} from '../pages/listado/listado';
import {VerperfilPage} from '../pages/verperfil/verperfil';
import {LacamPage} from '../pages/lacam/lacam';

import {LocalizarPage} from '../pages/localizar/localizar';

import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import {File} from '@ionic-native/file';

import {CrearqrPage} from '../pages/crearqr/crearqr';
import {LeerqrPage} from '../pages/leerqr/leerqr';


import {Camera} from '@ionic-native/camera';
import {NgxQRCodeModule} from 'ngx-qrcode2';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';


import {Geolocation} from '@ionic-native/geolocation';
import {NativeGeocoder} from '@ionic-native/native-geocoder';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegistroPage,
        MatePage,
        ListadoPage,
        VerperfilPage,
        LacamPage,
        CrearqrPage,
        LeerqrPage,
        LocalizarPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule,
        NgxQRCodeModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegistroPage,
        MatePage,
        ListadoPage,
        VerperfilPage,
        LacamPage,
        CrearqrPage,
        LeerqrPage,
        LocalizarPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider,
        Camera,
        BarcodeScanner,
        FileTransfer,
        // FileUploadOptions,
        FileTransferObject,
        File,
        Geolocation,
        NativeGeocoder
    ]
})
export class AppModule {}
