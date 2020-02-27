import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject, Subscription, timer, pipe } from 'rxjs';
import 'rxjs/add/observable/timer';

import Product from '../../../../app/models/product.model';

@Component({
    selector: 'wiki-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

    isEdit: boolean = false;
    isSuccess: boolean;
    returnMessage: string;
    displayMessage: boolean = false;
    timer: Observable<any>;
    messageSubscription: Subscription;

    @Input() product: Product;

    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
    }

    receiveIsEdit($event:boolean) {
        this.isEdit = $event; 
    }

    receiveMessage($event: any) {
        this.setTimer();
        this.returnMessage = $event;
        this.displayMessage = true;
    }

    receiveIsSuccess($event: boolean) {
        this.isSuccess = $event; 
    }

    setTimer() {
        this.timer = Observable.timer(2500);
        this.messageSubscription = this.timer.subscribe(() => {
            this.returnMessage = null;
            this.displayMessage = false;
        })
    }
}