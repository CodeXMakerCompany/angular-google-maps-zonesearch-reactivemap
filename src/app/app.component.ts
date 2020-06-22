import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-maps';
  @ViewChild("placesRef") placesRef : GooglePlaceDirective;
  options = {
    types : [],
    componentRestrictions: { country: 'MX' }
  }

  title_add;
  latitude;
  longitude;
  zoom;

  ngOnInit() {
    this.setCurrentLocation();
  }
  public handleAddressChange(address: Address) {
    // Do some stuff
    console.log(address);
    console.log('Latitud : ' + address.geometry.location.lat());
    console.log('Longitud : ' + address.geometry.location.lng());

    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();
    
  }
  public setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 15;
      })
    }
  }
}
