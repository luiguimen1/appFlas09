import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalizarPage } from './localizar';

@NgModule({
  declarations: [
    LocalizarPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalizarPage),
  ],
})
export class LocalizarPageModule {}
