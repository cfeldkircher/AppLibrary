import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import AppSettings from '../appSettings';
import KnowledgebaseItem from '../../app/models/kbitem.model';

@Injectable()
export class KnowledgebaseItemService {

    api_url = AppSettings.RCMWiki_API_EndPoint;
    kbUrl = `${this.api_url}/knowledgebase/items`;

    constructor(
        private http: HttpClient
    ) { }

    public getKbItemsbyProduct(productId:number): Observable<any> {
        return this.http.get(this.kbUrl + '/product/' + productId, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public insertKbItembyProduct(item: KnowledgebaseItem): Observable<any> {
        return this.http.post(this.kbUrl + '/add', item, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public updateKbItembyProduct(item: KnowledgebaseItem): Observable<any> {
        return this.http.put(this.kbUrl + '/update', item, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}