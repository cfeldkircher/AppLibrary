import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Response } from '@angular/http';
import { Injectable } from '@angular/core';
import AppSettings from '../../app/appSettings';

import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

    api_url = AppSettings.RCMWiki_API_EndPoint_Token;
    tokenUrl = `${this.api_url}`;

    constructor(
        private http: HttpClient
    ) { }

    public getToken(userName: string, passWord: string): Observable<any> {
        var data = "grant_type=password&username=" + userName + "&passwords=" + passWord;
        return this.http.post(this.tokenUrl, data, { headers: new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' }) });
    }
}