import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from '../models/car';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CarService {
    private carUrl = 'api/cars';  // URL to web api
    constructor(
        private http: HttpClient) { }


    getCars(): Observable<Car[]> {
        return this.http.get<Car[]>(this.carUrl)
            .pipe(
                tap(_ => console.log('fetched cars')),
                catchError(this.handleError('getHeroes', []))
            );
    }
    updateCar(car: Car): Observable<any> {
        return this.http.put(this.carUrl, car, httpOptions).pipe(
            tap(_ => console.log('updated cars')),
            catchError(this.handleError<any>('updateHero'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            return of(result as T);
        };
    }
}