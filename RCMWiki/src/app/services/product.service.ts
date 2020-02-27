import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import AppSettings from '../appSettings';
import Product from '../../app/models/product.model';

@Injectable()
export class ProductService {

    api_url = AppSettings.RCMWiki_API_EndPoint;
    listUrl = `${this.api_url}/product`;

    constructor(
        private http:HttpClient
    ) { }

    public productlistAll(): Observable<any> {
        return this.http.get(this.listUrl + '/all', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
    public updateProduct(product: Product): Observable<any>{
        return this.http.put(this.listUrl + '/product/edit', product, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
    public insertProduct(product: Product): Observable<any> {
        return this.http.post(this.listUrl + '/product/insert', product, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}