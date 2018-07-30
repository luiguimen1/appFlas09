import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LacamPage } from './lacam';

@NgModule({
  declarations: [
    LacamPage,
  ],
  imports: [
    IonicPageModule.forChild(LacamPage),
  ],
})
export class LacamPageModule {}
