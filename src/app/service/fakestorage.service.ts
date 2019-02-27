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
              CarId: 0,
              CarType: '레티나',
              Latitude: 37.501,
              Longitude: 126.975,
              Status: '주행중',
              Heading: 180,
              CarNumber: '12가3456',
              ForbidMove: false
            },
            {
              CarId: 1,
              CarType: '소나타',
              Latitude: 37.525,
              Longitude: 126.964,
              Status: '주행중',
              Heading: 90,
              CarNumber: '12나3456',
              ForbidMove: false
            },
            {
              CarId: 2,
              CarType: 'SM5',
              Latitude: 37.505,
              Longitude: 126.959,
              Status: '주행중',
              Heading: 90,
              CarNumber: '33다3456',
              ForbidMove: false
            },
            {
              CarId: 3,
              CarType: '아반떼',
              Latitude: 37.545,
              Longitude: 126.961,
              Status: '주행중',
              Heading: 90,
              CarNumber: '40라0404',
              ForbidMove: false
            },
            {
              CarId: 4,
              CarType: '소나타',
              Latitude: 37.565,
              Longitude: 126.919,
              Status: '주행중',
              Heading: 90,
              CarNumber: '50마1234',
              ForbidMove: false
            },
            {
              CarId: 5,
              CarType: '소렌토',
              Latitude: 37.579,
              Longitude: 126.991,
              Status: '주행중',
              Heading: 90,
              CarNumber: '61바5612',
              ForbidMove: false
            }
        ];
        return {cars};
    }

}

