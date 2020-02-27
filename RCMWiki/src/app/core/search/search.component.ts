import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';

import Product from '../../models/product.model';
import DocumentSearch from '../../models/documentsearch.model';
import JiraStory from '../../models/jirastory.model';
import JiraSearch from '../../models/jirasearch.model';
import { ProductService } from '../../services/product.service';
import { SharepointService } from '../../services/sharepoint.service';
import { JiraService } from '../../services/jira.service';
import { debounceTime } from 'rxjs/operators';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
    selector: 'wiki-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class SearchComponent implements OnInit {

    productList: Product[];
    productCount: number = 0;
    documentList: DocumentSearch[];
    documentCount: number = 0;
    storyList: JiraStory[];
    storyCount: number = 0;
    criteria: JiraSearch = new JiraSearch;
    newProduct: Product = new Product;
    product: Product;
    document: DocumentSearch;
    selectedDocument: DocumentSearch;
    columns: string[] = [];
    selectedProduct: Product;
    searchTerm: FormControl = new FormControl();
    displayHome: boolean = true;
    addNew: boolean = false;
    productParam: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService,
        private documentService: SharepointService,
        private jiraService: JiraService
    ) { }

    ngOnInit(): void {
        if (sessionStorage.getItem('userLoggedIn') != 'true') {
            this.router.navigateByUrl('login');
        }

        this.route.params.subscribe(params => {
            this.productParam = params['productId'];
            if (this.productParam != null) {
                this.displayHome = false;
            }
        });

        this.loadData();

        this.searchTerm.valueChanges
            .debounceTime(400)
            .subscribe(res1 => {
                this.documentService.documentSearch(res1)
                    .subscribe(data => {
                        this.documentList = data.result;
                        if (this.documentList != null) {
                            this.documentCount = this.documentList.length;
                        }

                    },
                        //err => console.error(err),
                    );
                this.criteria.criteria = res1;
                this.jiraService.getJiraStories(this.criteria)
                    .subscribe(res => {
                        this.storyList = res.result.data;
                        if (this.storyList != null) {
                            this.storyCount = this.storyList.length;
                        }
                    },
                    );

            })
    }

    async loadData() {
        try {
            await this.productService.productlistAll().subscribe(res => {
                this.productList = res.result.data;
                if (this.productList != null) {
                    this.productCount = this.productList.length;
                }
                this.getColumnList();
                if (this.productParam != null) {
                    var filteredList = this.productList.filter(f => f.ProductID == this.productParam);
                    this.selectedProduct = filteredList[0];
                }
            }, err => {
                console.log("Error occured");
            });
        }
        catch (err) {
            //console.log(err.message);
        }
    }

    getColumnList() {
        let prod = new Product();

        for (let key of Object.keys(prod)) {
            this.columns.push(key);
        }
    }

    getProductList() {
        this.productService.productlistAll().subscribe(res => {
            this.productList = res.result.data;
            if (this.productList != null) {
                this.productCount = this.productList.length;
            }
        });
    }

    async searchDocument(name: string) {
        try {
            await this.documentService.documentSearch(name).subscribe(res => {
                this.documentList = res.result;
                if (this.documentList != null) {
                    this.documentCount = this.documentList.length;
                }
            });
        } catch (err) {
            //console.log(err.message);
        }

    }

    async searchJira(criteria: JiraSearch) {
        try {
            await this.jiraService.getJiraStories(criteria).subscribe(res => {
                this.storyList = res.result.data;
                if (this.storyList != null) {
                    this.storyCount = this.storyList.length;
                }
            });
        } catch (err) {
            //console.log(err.message);
        }
    }

    addNewOne() {
        this.router.navigateByUrl('productedit');
    }

    logOut() {
        sessionStorage.removeItem('userLoggedIn');
        this.router.navigateByUrl('login');
    }

    homeClick() {
        this.router.navigateByUrl('');
    }

    onFilter(event: any, dt: any) {
        this.productCount = event.filteredValue.length;
    }

}