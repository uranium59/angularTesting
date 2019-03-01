import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Car } from '../models/car';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class CarService implements OnInit {

    private carsUrl = 'api/cars';  // URL to web api
    constructor(
        private http: HttpClient) {
    }

    ngOnInit() {
    }
    private cars$: BehaviorSubject<Car[]>;
    private observeCars: Observable<Car[]>;

    getDataFromDB(): void {
        this.http.get<Car[]>(this.carsUrl)
            .subscribe(
                _ => {
                    this.cars$.next(_);
                }),
            catchError(this.handleError('getCars', [])
            );
    }
    getCars(): Observable<Car[]> {
        if (this.cars$ === undefined) {
            this.cars$ = new BehaviorSubject<Car[]>([]);
            this.getDataFromDB();
        }
        return this.cars$;
    }
    getCar(id: number | string): Observable<Car> {
        return this.getCars().pipe(
            map(cars => cars.find(car => car.id === +id))
        );
    }

    updateCar(car: Car): Observable<any> {
        return this.http.put(this.carsUrl, car, httpOptions).pipe(
            tap(_ => { this.getDataFromDB(); }),
            catchError(this.handleError<any>('update cars'))
        );
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead

            return of(result as T);
        };
    }
}