import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable'; //For test w/o server side

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
//import 'rxjs/add/observable/of'; //For test w/o server side

import { Car } from "./car";

@Injectable()
export class CarsService {
  private carUrl = "http://localhost:3001/api/cars";  // URL to web API

  constructor(private http: Http) {}

  getCars(): Observable<Car[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers }); // Create a request option

    return this.http.get(this.carUrl, options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  //Extract JS object from json response (which comes wrapped in data property)
  private extractData(res: Response) {
    let body = res.json();
    //console.log(body); (Debugging)
    return body || { };
  }

  // handleError method as per the Angular.io website
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}