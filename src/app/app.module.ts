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



@NgModule({
    declarations: [
        MyApp,
        HomePage,
        RegistroPage,
        MatePage,
        ListadoPage,
        VerperfilPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpClientModule
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        RegistroPage,
        MatePage,
        ListadoPage,
        VerperfilPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        ConectarProvider
    ]
})
export class AppModule {}
