import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Car } from '../models/car';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class FakeStorageService implements InMemoryDbService {
  createDb() {
    const cars = [
      {
        id: 0,
        CarType: '레티나',
        Latitude: 37.501,
        Longitude: 126.975,
        Status: '주차',
        Heading: 180,
        CarNumber: '12가3456',
        ForbidMove: false
      },
      {
        id: 1,
        CarType: '소나타',
        Latitude: 37.566731,
        Longitude: 127.002183,
        Status: '사고',
        Heading: 90,
        CarNumber: '12나3456',
        ForbidMove: false
      },
      {
        id: 2,
        CarType: 'SM5',
        Latitude: 37.515660,
        Longitude: 126.941339,
        Status: '주행중',
        Heading: 270,
        CarNumber: '33다3456',
        ForbidMove: false
      },
      {
        id: 3,
        CarType: '아반떼',
        Latitude: 37.549108,
        Longitude: 126.913548,
        Status: '주행중',
        Heading: 111,
        CarNumber: '40라0404',
        ForbidMove: true
      },
      {
        id: 4,
        CarType: '소나타',
        Latitude: 37.532269,
        Longitude: 126.911195,
        Status: '주차',
        Heading: 222,
        CarNumber: '50마1234',
        ForbidMove: false
      },
      {
        id: 5,
        CarType: '소렌토',
        Latitude: 37.504216,
        Longitude: 126.980775,
        Status: '주행중',
        Heading: 333,
        CarNumber: '61바5612',
        ForbidMove: false
      },
    ];
    return { cars };
  }

}

