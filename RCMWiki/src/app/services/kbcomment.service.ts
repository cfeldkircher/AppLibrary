import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import AppSettings from '../appSettings';
import KnowledgebaseComment from '../../app/models/kbcomment.model';

@Injectable()
export class KnowledgebaseCommentService {

    api_url = AppSettings.RCMWiki_API_EndPoint;
    kbUrl = `${this.api_url}/knowledgebase/comments`;

    constructor(
        private http: HttpClient
    ) { }

    public getKbCommentsbyItem(itemId: number): Observable<any> {
        return this.http.get(this.kbUrl + '/item/' + itemId, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public getKbCommentsbyProduct(productId: number): Observable<any> {
        return this.http.get(this.kbUrl + '/product/' + productId, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }

    public insertKbComment(comment: KnowledgebaseComment): Observable<any> {
        return this.http.post(this.kbUrl + '/add', comment, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}