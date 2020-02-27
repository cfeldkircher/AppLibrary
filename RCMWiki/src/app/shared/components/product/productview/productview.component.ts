import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Product from '../../../../../app/models/product.model';

@Component({
    selector: 'wiki-productview',
    templateUrl: './productview.component.html',
    styleUrls: ['./productview.component.css']
})

export class ProductViewComponent implements OnInit {

    @Input() product: Product = new Product;
    collapseSupport: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
    }
}