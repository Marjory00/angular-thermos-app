import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, 
HttpHeaders, 
withInterceptors} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { AlertService } from '../_services';
import { Role } from '../_models';

// array in local storage for accounts
const accountsKey =
'angular-15-signup-verification-boilerplate-accounts';
let accounts = JSON.parse(localStorage.getItem(accountsKey)) || [];


@Injectable() 
export class fakeBackendProvider implements HttpInterceptor {
    constructor( private alertService: AlertService) { }

intercept(request: HttpRequest<any>, next: HttpHandler);
Observable<HttpEvent<any>> {
    const { url, method, headers, body } = requests;
    const alertService = this.alertService;

    

}