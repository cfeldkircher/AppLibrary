import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import Product from '../../../../../app/models/product.model';
import { ProductService } from '../../../../services/product.service';

@Component({
    selector: 'wiki-productedit',
    templateUrl: './productedit.component.html',
    styleUrls: ['./productedit.component.css']
})

export class ProductEditComponent implements OnInit {
    isInsert: boolean = false;
    message: string;
    success: boolean;

    @Input() product: Product = new Product;

    @Output() isEdit = new EventEmitter<boolean>();
    @Output() returnMessage = new EventEmitter<string>();
    @Output() isSuccess = new EventEmitter<boolean>();

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private productService: ProductService
    ) { }

    ngOnInit(): void {
        if (this.router.url.includes('productedit')) {
            this.isInsert = true;
        }
    }

    saveProduct(product: Product) {
        if (this.isInsert) {
            this.insertProduct(product);
        } else {
            this.updateProduct(product);
        }
    }

    cancelEdit() {
        if(this.isInsert){
            this.router.navigateByUrl('');
        } else {
            this.isEdit.emit(false);
        }
    }

    updateProduct(product: Product) {
        this.productService.updateProduct(product).subscribe(res => {
            if (res.result.message == "Success") {
                this.isSuccess.emit(true);
                this.returnMessage.emit("Success");
                this.isEdit.emit(false);
            } else {
                this.isSuccess.emit(false);
                this.returnMessage.emit(res.result.message);
                this.isEdit.emit(false);
            }
        });
    }

    insertProduct(product: Product) {
        this.productService.insertProduct(product).subscribe(res => {
            this.router.navigate(['/search/product', res.result.data]);
        })
    }
}