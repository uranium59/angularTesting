import {Injectable, NgZone} from '@angular/core';
import {Observable, Observer} from 'rxjs';

import {AgmMarker} from './../../directives/marker';

import {GoogleMapsAPIWrapper} from './../google-maps-api-wrapper';
import {Marker} from './../google-maps-types';

declare var google: any;

@Injectable()
export class MarkerManager {
  protected _markers: Map<AgmMarker, Promise<Marker>> =
      new Map<AgmMarker, Promise<Marker>>();

  constructor(protected _mapsWrapper: GoogleMapsAPIWrapper, protected _zone: NgZone) {}

  deleteMarker(marker: AgmMarker): Promise<void> {
    const m = this._markers.get(marker);
    if (m == null) {
      // marker already deleted
      return Promise.resolve();
    }
    return m.then((m: Marker) => {
      return this._zone.run(() => {
        m.setMap(null);
        this._markers.delete(marker);
      });
    });
  }

  updateMarkerPosition(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then(
        (m: Marker) => m.setPosition({lat: marker.latitude, lng: marker.longitude}));
  }

  updateTitle(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setTitle(marker.title));
  }

  updateLabel(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => { m.setLabel(marker.label); });
  }

  updateDraggable(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setDraggable(marker.draggable));
  }

  updateIcon(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setIcon(marker.iconUrl));
  }

  updateColor(marker: AgmMarker): Promise<void>{
    return this._markers.get(marker).then((m: Marker) => {
      console.log(typeof m.getIcon);
      if(typeof m.getIcon === 'string'){

      }
    });
  }

  updateOpacity(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setOpacity(marker.opacity));
  }

  updateVisible(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setVisible(marker.visible));
  }

  updateZIndex(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setZIndex(marker.zIndex));
  }

  updateClickable(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => m.setClickable(marker.clickable));
  }

  updateAnimation(marker: AgmMarker): Promise<void> {
    return this._markers.get(marker).then((m: Marker) => {
      if (typeof marker.animation === 'string') {
        m.setAnimation(google.maps.Animation[marker.animation]);
      } else {
        m.setAnimation(marker.animation);
      }
    });
  }

  addMarker(marker: AgmMarker) {
    const markerPromise = this._mapsWrapper.createMarker({
      position: {lat: marker.latitude, lng: marker.longitude},
      label: marker.label,
      draggable: marker.draggable,
      icon: marker.iconUrl ? marker.iconUrl : {
        anchor: { x: 5, y: 12},
        path: `M23.71958907511433,6.244872411674812 c-0.11596111106872571,-0.1660985523686762 -0.2889920883178718,-0.26304878036069335 
        -0.47052283287048385,-0.26304878036069335 h-2.3076868228912355 c-0.5694844093322755,-1.7636387062665437 -1.3113926696777347,-3.4916339463595514 
        -2.154691011428833,-4.1439093773352536 c-2.917241563796997,-2.2533799314909233 -10.655065441131592,-2.2533799314909233 -13.57230700492859,0 
        c-0.8439054679870607,0.6529883002991733 -1.5827780971527101,2.3831221483625935 -2.1552981376647953,4.1439093773352536 H0.7513964424391585 
        c-0.1833521232604982,0 -0.3557759742736821,0.09695022799201707 -0.47052283287048385,0.26304878036069335 c-0.11535398483276363,0.16538568304520548 
        -0.16149557876586934,0.384236565350715 -0.12385375213623064,0.5945330157745746 l0.3418120708465585,1.9447075144281056 c0.058284118652343835,0.3314842354138822 
        0.30720587539672883,0.5681568508061585 0.5943765850067131,0.5681568508061585 h0.6836241416931167 c-0.6599462184906018,0.8939381316322746 
        -0.9799017448425287,2.0195587933925294 -0.9841516284942625,3.145892324476256 c-0.004249883651733413,1.3915209194148321 0.4456306571960454,2.649022406017169 
        1.2682867069244388,3.5386833217086187 c0.00910689353942874,0.009267301205119274 0.01821378707885743,0.015683125116355723 0.026713554382324298,0.024950426321474973 
        v2.721022207687711 c0,0.5895429305102794 0.40798883056640683,1.0693039852060693 0.9106893539428716,1.0693039852060693 h2.1285845832824712 c0.502700523376465,0 
        0.9106893539428716,-0.4797610546957899 0.9106893539428716,-1.0693039852060693 v-1.0935415422040742 h11.924566400527954 v1.0935415422040742 c0,0.5895429305102794 
        0.40798883056640683,1.0693039852060693 0.9106893539428716,1.0693039852060693 h2.1285845832824712 c0.5014862709045405,0 0.9106893539428716,-0.4797610546957899 
        0.9106893539428716,-1.0693039852060693 v-2.6675570084274076 c0.8730475273132332,-0.9388488990109296 1.2901432514190674,-2.230568113139861 
        1.2956073875427245,-3.5201487192983802 c0.0036427574157714927,-1.164828474551145 -0.33088379859924416,-2.3317955570727023 -1.0296860961914065,-3.244268291115214 
        h0.7291586093902588 c0.2883849620819099,0 0.5373067188262934,-0.2366726153922768 0.5943765850067131,-0.5688697201296289 l0.3424191970825203,-1.9439946451046346 
        C23.879263275172313,6.629108977025526 23.834943059947094,6.41168383336696 23.71958907511433,6.244872411674812 zM6.214318313624461,3.623651909273001 
        c2.3252934837341313,-1.7971435644696672 9.245925447463991,-1.7971435644696672 11.570004678726196,0 c0.4517019195556643,0.34788022985370853 
        1.032721727371216,1.754371405061424 1.5651714363098161,3.4766636905666664 H4.650361129786571 C5.181596586253246,5.378736183657896 5.7626163940687976,3.9729578777736503 
        6.214318313624461,3.623651909273001 zM3.4907500190993157,12.766200982784893 c0,-1.1619769972572624 0.8026208839416504,-2.1029645042386047 
        1.7916295223236087,-2.1029645042386047 c0.9902228908538819,0 1.7916295223236087,0.9409875069813415 1.7916295223236087,2.1029645042386047 
        s-0.8014066314697266,2.103677373562074 -1.7916295223236087,2.103677373562074 C4.293370903040965,14.869878356346968 3.4907500190993157,13.928177980042156 
        3.4907500190993157,12.766200982784893 zM18.741153940226635,14.869878356346968 c-0.989008638381958,0 -1.7916295223236087,-0.941700376304812 
        -1.7916295223236087,-2.103677373562074 s0.8026208839416504,-2.1029645042386047 1.7916295223236087,-2.1029645042386047 c0.9902228908538819,0 
        1.7916295223236087,0.9409875069813415 1.7916295223236087,2.1029645042386047 S19.730162578608592,14.869878356346968 18.741153940226635,14.869878356346968 z`,
        scale: 1,
        rotation: 0,
        strokeColor: marker.color,
        fillColor: marker.color,
        fillOpacity: 1,
        strokeWeight: 1
      },
      opacity: marker.opacity,
      visible: marker.visible,
      zIndex: marker.zIndex,
      title: marker.title,
      clickable: marker.clickable,
      animation: (typeof marker.animation === 'string') ? google.maps.Animation[marker.animation] : marker.animation
    });

    this._markers.set(marker, markerPromise);
  }

  getNativeMarker(marker: AgmMarker): Promise<Marker> {
    return this._markers.get(marker);
  }

  createEventObservable<T>(eventName: string, marker: AgmMarker): Observable<T> {
    return new Observable((observer: Observer<T>) => {
      this._markers.get(marker).then((m: Marker) => {
        m.addListener(eventName, (e: T) => this._zone.run(() => observer.next(e)));
      });
    });
  }
}
