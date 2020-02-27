import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import AppSettings from '../appSettings';
import RelativeUrl from '../models/relativeurl.model';

@Injectable()
export class SharepointService {

    api_url = AppSettings.RCMWiki_API_EndPoint;
    listUrl = `${this.api_url}/documents`;
    pageUrl = `${this.api_url}/page`;
    searchUrl = `${this.api_url}/documents/search`;

    constructor(
        private http: HttpClient
    ) { }

    public documentlistAll(path:RelativeUrl): Observable<any> {
        return this.http.post(this.listUrl + '/all', path, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public documentSearch(name: string): Observable<any> {
        return this.http.get(this.searchUrl + '/' + name, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public pageContent(page: RelativeUrl): Observable<any> {
        return this.http.post(this.pageUrl + '/content', page, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}