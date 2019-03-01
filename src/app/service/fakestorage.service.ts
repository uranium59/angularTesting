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
        Latitude: 37.525,
        Longitude: 126.964,
        Status: '사고',
        Heading: 90,
        CarNumber: '12나3456',
        ForbidMove: false
      },
      {
        id: 2,
        CarType: 'SM5',
        Latitude: 37.505,
        Longitude: 126.959,
        Status: '주행중',
        Heading: 270,
        CarNumber: '33다3456',
        ForbidMove: false
      },
      {
        id: 3,
        CarType: '아반떼',
        Latitude: 37.5446,
        Longitude: 126.961,
        Status: '주행중',
        Heading: 111,
        CarNumber: '40라0404',
        ForbidMove: true
      },
      {
        id: 4,
        CarType: '소나타',
        Latitude: 37.5648,
        Longitude: 126.9192,
        Status: '주차',
        Heading: 222,
        CarNumber: '50마1234',
        ForbidMove: true
      },
      {
        id: 5,
        CarType: '소렌토',
        Latitude: 37.579,
        Longitude: 126.9891,
        Status: '주행중',
        Heading: 333,
        CarNumber: '61바5612',
        ForbidMove: false
      }
    ];
    return { cars };
  }

}

