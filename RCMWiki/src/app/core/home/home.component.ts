import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import RelativeUrl from '../../models/relativeurl.model';
import { ProductService } from '../../services/product.service';
import { SharepointService } from '../../services/sharepoint.service';
import { debounceTime } from 'rxjs/operators';
import { of } from "rxjs/observable/of";
import { share } from 'rxjs/operators';

@Component({
    selector: 'wiki-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

    page: RelativeUrl = new RelativeUrl();
    pageContent: any;
    pageObservable: Observable<any>;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private pageService: SharepointService
    ) { }

    ngOnInit(): void {
        this.getPageContent();
    }

    getPageContent() {
        this.page.relativePath = 'Knowledgebase%20Wiki/Home.aspx'; 
        this.pageService.pageContent(this.page).subscribe(res => {
            this.pageContent = res.result; 
            this.pageObservable = this.pageLoaded().pipe(share());
        })
    }

   
    pageLoaded() {
        return of({
            loaded: true
        });
    }
}