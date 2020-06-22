import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//A-material
import { MatCardModule } from '@angular/material/card';
//Flexbox
import { FlexLayoutModule } from '@angular/flex-layout';
//G-Mpas
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey : 'your-api-key-goes-here',
      libraries : ['places']
    }),
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
