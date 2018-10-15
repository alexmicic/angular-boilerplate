import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppConstants } from '../../shared/constants/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(
    private http: HttpClient
  ) { }

  // I am using demo API, please change me !!!
  authorize() : Promise<any> {
    console.log(AppConstants.rootURL);
    const promise = this.http.post('https://reqres.in/api/users', {})
    .toPromise()
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

    return promise;
  }
}
