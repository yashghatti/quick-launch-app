import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Brightness } from "@ionic-native/brightness/ngx";

import { HomePageRoutingModule } from './home-routing.module';
import {WidgetComponent} from "../widget/widget.component";
import {ScannableContentComponent} from "../scannable-content/scannable-content.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, WidgetComponent, ScannableContentComponent],
  providers: [
    Brightness
  ]
})
export class HomePageModule {}
