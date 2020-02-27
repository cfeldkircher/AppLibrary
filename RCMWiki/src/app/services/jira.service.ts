import { Observable } from 'rxjs/Rx';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Request, Response } from '@angular/http';
import { Injectable } from '@angular/core';


import 'rxjs/add/operator/map';
import AppSettings from '../appSettings';
import JiraSearch from '../../app/models/jirasearch.model';

@Injectable()
export class JiraService {

    api_url = AppSettings.RCMWiki_API_EndPoint;
    jiraUrl = `${this.api_url}/jira`;

    constructor(
        private http: HttpClient
    ) { }

    public getJiraStories(criteria: JiraSearch): Observable<any> {
        return this.http.post(this.jiraUrl, criteria, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json', 'Accept': 'application/json'
            })
        });
    }
}