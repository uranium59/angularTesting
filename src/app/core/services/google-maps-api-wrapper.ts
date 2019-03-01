import { Injectable, NgZone } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import * as mapTypes from './google-maps-types';
import { Polyline } from './google-maps-types';
import { PolylineOptions } from './google-maps-types';
import { MapsAPILoader } from './maps-api-loader/maps-api-loader';
import { forEach } from '@angular/router/src/utils/collection';

// todo: add types for this
declare var google: any;

/**
 * Wrapper class that handles the communication with the Google Maps Javascript
 * API v3
 */
@Injectable()
export class GoogleMapsAPIWrapper {
  private _map: Promise<mapTypes.GoogleMap>;
  private _mapResolver: (value?: mapTypes.GoogleMap) => void;

  constructor(private _loader: MapsAPILoader, private _zone: NgZone) {
    this._map =
      new Promise<mapTypes.GoogleMap>((resolve: () => void) => { this._mapResolver = resolve; });
  }

  createMap(el: HTMLElement, mapOptions: mapTypes.MapOptions): Promise<void> {
    return this._zone.runOutsideAngular(() => {
      return this._loader.load().then(() => {
        const map = new google.maps.Map(el, mapOptions);
        this._mapResolver(<mapTypes.GoogleMap>map);
        return;
      });
    });
  }

  setMapOptions(options: mapTypes.MapOptions) {
    this._map.then((m: mapTypes.GoogleMap) => { m.setOptions(options); });
  }

  /**
   * Creates a google map marker with the map context
   */
  createMarker(options: mapTypes.MarkerOptions = <mapTypes.MarkerOptions>{}, addToMap: boolean = true):
    Promise<mapTypes.Marker> {
    return this._map.then((map: mapTypes.GoogleMap) => {
      if (addToMap) {
        options.map = map;
      }
      return new google.maps.Marker(options);
    });
  }

  createInfoWindow(options?: mapTypes.InfoWindowOptions): Promise<mapTypes.InfoWindow> {
    return this._map.then(() => {
      const infoWindow = new google.maps.InfoWindow(options);

      google.maps.event.addListener(infoWindow, 'domready', () => {

        // Reference to the DIV that wraps the bottom of infowindow
        const iwOuters = document.getElementsByClassName('gm-style-iw');
        /* Since this div is in a position prior to .gm-div style-iw.
         * We use jQuery and create a iwBackground variable,
         * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
        */
        for (let i = 0; i < iwOuters.length; ++i) {
          const iwOuter = iwOuters[i];
          const iwBackground = iwOuter.previousElementSibling;
          if(iwBackground.children[2].getAttribute('style') === `display: none;`){
            continue;
          }

          // Removes background shadow DIV
          iwBackground.children[0].setAttribute('style', `display: none;`);
          iwBackground.children[1].setAttribute('style', `display: none;`);
          iwBackground.children[2].setAttribute('style', `display: none;`);
          iwBackground.children[3].setAttribute('style', `display: none;`);

          // Removes white background DIV

          // Moves the infowindow 115px to the right.
          iwOuter.parentElement.parentElement.setAttribute('style', `left: 115px;`);
          const iwParent = iwOuter.parentElement as HTMLElement;
          iwParent.style.width = (+iwParent.style.width - 30) + '';
          iwParent.style.height = (+iwParent.style.height - 30) + '';
          iwOuter.setAttribute('style', iwOuter.getAttribute('style') + 'left: 60px !important; top: 60px !important;');
          // Moves the shadow of the arrow 76px to the left margin.
          // Reference to the div that groups the close button elements.
          var iwCloseBtn = iwOuter.nextElementSibling;

          // Apply the desired effect to the close button
          iwCloseBtn.setAttribute('style', `display: none;`);
        }
      });
      return infoWindow;
    });
  }

  /**
   * Creates a google.map.Circle for the current map.
   */
  createCircle(options: mapTypes.CircleOptions): Promise<mapTypes.Circle> {
    return this._map.then((map: mapTypes.GoogleMap) => {
      options.map = map;
      return new google.maps.Circle(options);
    });
  }

  /**
   * Creates a google.map.Rectangle for the current map.
   */
  createRectangle(options: mapTypes.RectangleOptions): Promise<mapTypes.Rectangle> {
    return this._map.then((map: mapTypes.GoogleMap) => {
      options.map = map;
      return new google.maps.Rectangle(options);
    });
  }

  createPolyline(options: PolylineOptions): Promise<Polyline> {
    return this.getNativeMap().then((map: mapTypes.GoogleMap) => {
      let line = new google.maps.Polyline(options);
      line.setMap(map);
      return line;
    });
  }

  createPolygon(options: mapTypes.PolygonOptions): Promise<mapTypes.Polygon> {
    return this.getNativeMap().then((map: mapTypes.GoogleMap) => {
      let polygon = new google.maps.Polygon(options);
      polygon.setMap(map);
      return polygon;
    });
  }

  /**
   * Creates a new google.map.Data layer for the current map
   */
  createDataLayer(options?: mapTypes.DataOptions): Promise<mapTypes.Data> {
    return this._map.then(m => {
      let data = new google.maps.Data(options);
      data.setMap(m);
      return data;
    });
  }

  /**
   * Determines if given coordinates are insite a Polygon path.
   */
  containsLocation(latLng: mapTypes.LatLngLiteral, polygon: mapTypes.Polygon): Promise<boolean> {
    return google.maps.geometry.poly.containsLocation(latLng, polygon);
  }

  subscribeToMapEvent<E>(eventName: string): Observable<E> {
    return new Observable((observer: Observer<E>) => {
      this._map.then((m: mapTypes.GoogleMap) => {
        m.addListener(eventName, (arg: E) => { this._zone.run(() => observer.next(arg)); });
      });
    });
  }

  clearInstanceListeners() {
    this._map.then((map: mapTypes.GoogleMap) => {
      google.maps.event.clearInstanceListeners(map);
    });
  }

  setCenter(latLng: mapTypes.LatLngLiteral): Promise<void> {
    return this._map.then((map: mapTypes.GoogleMap) => map.setCenter(latLng));
  }

  getZoom(): Promise<number> { return this._map.then((map: mapTypes.GoogleMap) => map.getZoom()); }

  getBounds(): Promise<mapTypes.LatLngBounds> {
    return this._map.then((map: mapTypes.GoogleMap) => map.getBounds());
  }

  getMapTypeId(): Promise<mapTypes.MapTypeId> {
    return this._map.then((map: mapTypes.GoogleMap) => map.getMapTypeId());
  }

  setZoom(zoom: number): Promise<void> {
    return this._map.then((map: mapTypes.GoogleMap) => map.setZoom(zoom));
  }

  getCenter(): Promise<mapTypes.LatLng> {
    return this._map.then((map: mapTypes.GoogleMap) => map.getCenter());
  }

  panTo(latLng: mapTypes.LatLng | mapTypes.LatLngLiteral): Promise<void> {
    return this._map.then((map) => map.panTo(latLng));
  }

  panBy(x: number, y: number): Promise<void> {
    return this._map.then((map) => map.panBy(x, y));
  }

  fitBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral): Promise<void> {
    return this._map.then((map) => map.fitBounds(latLng));
  }

  panToBounds(latLng: mapTypes.LatLngBounds | mapTypes.LatLngBoundsLiteral): Promise<void> {
    return this._map.then((map) => map.panToBounds(latLng));
  }

  /**
   * Returns the native Google Maps Map instance. Be careful when using this instance directly.
   */
  getNativeMap(): Promise<mapTypes.GoogleMap> { return this._map; }

  /**
   * Triggers the given event name on the map instance.
   */
  triggerMapEvent(eventName: string): Promise<void> {
    return this._map.then((m) => google.maps.event.trigger(m, eventName));
  }
}
