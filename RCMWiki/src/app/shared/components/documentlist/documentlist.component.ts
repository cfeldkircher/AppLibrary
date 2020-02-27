import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Document from '../../../../app/models/document.model';
import { SharepointService } from '../../../services/sharepoint.service';
import Product from '../../../../app/models/product.model';
import RelativeUrl from '../../../../app/models/relativeurl.model';

@Component({
    selector: 'wiki-documentlist',
    templateUrl: './documentlist.component.html',
    styleUrls: ['./documentlist.component.css']
})

export class DocumentListComponent implements OnInit {

    documentList: Document[];
    selectedDocument: Document;
    relativeUrl: RelativeUrl = new RelativeUrl();
    relativePath: string;
    folders: string[] = [];

    @Input() product: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private sharepointService: SharepointService
    ) { }

    ngOnInit(): void {

        this.getDocumentList(this.product); 
    }

    getDocumentList(product: string) {
        this.relativeUrl.relativePath = product;
        this.sharepointService.documentlistAll(this.relativeUrl).subscribe(res => {
            this.documentList = res.result; 
        })
    }
    
    selectFolder(folder: string) {
        
        const one = new Promise<any>((resolve, reject) => {
            resolve(this.folders.push(folder));
        });

        const two = new Promise<any>((resolve, reject) => {
            resolve(this.buildPath());
        });

        one.then(res => {
            //console.log(this.folders);
        });

        two.then(res => {
            var path = this.product + res;
            this.getDocumentList(path);
        });
        
    }

    folderUp() {
        const one = new Promise<any>((resolve, reject) => {
            resolve(this.removeFolder());
        });

        const two = new Promise<any>((resolve, reject) => {
            resolve(this.buildPath());
        });

        one.then(res => {

        });

        two.then(res => {
            var path = this.product + res;
            this.getDocumentList(path);
        });
    }

    removeFolder() {
        this.folders.pop();
    }

    addFolder(folder: string) {
        this.folders.push(folder);
    }

    buildPath():string {
        var relPath = '';
        for (var val of this.folders) {
            relPath = relPath + '/' + val;
        };
        return relPath;
    }
    
}