import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { FormControl } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

import KnowledgebaseItem from '../../../models/kbitem.model';
import { KnowledgebaseItemService } from '../../../services/kbitem.service';
import User from '../../../models/user.model';
import KnowledgebaseComment from '../../../models/kbcomment.model';
import { KnowledgebaseCommentService } from '../../../services/kbcomment.service';
import { debounceTime } from 'rxjs/operators';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

@Component({
    selector: 'wiki-knowledgebase',
    templateUrl: './knowledgebase.component.html',
    styleUrls: ['./knowledgebase.component.css'],
    encapsulation: ViewEncapsulation.None
})

export class KnowledgebaseComponent implements OnInit {

    displayDialogAdd: boolean = false;
    displayDialogComment: boolean = false;
    newItem: KnowledgebaseItem = new KnowledgebaseItem;
    itemCount: number = 0;
    newComment: KnowledgebaseComment = new KnowledgebaseComment;
    commentCount: number = 0;
    itemList: KnowledgebaseItem[];
    commentList: KnowledgebaseComment[];
    user: User;
    itemMessage: string;
    displayItemMessage: boolean = false;
    commentMessage: string;
    displayCommentMessage: boolean = false;
    searchTerm: string;

    @Input() appId: number;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private kbItemService: KnowledgebaseItemService,
        private kbCommentService: KnowledgebaseCommentService
    ) { }

    ngOnInit(): void {
        if (sessionStorage.getItem('userLoggedIn') != 'true') {
            this.router.navigateByUrl('login');
        }

        this.user = JSON.parse(sessionStorage.getItem('user')); 
        this.getItems(this.appId);
        this.getCommentsbyApp(this.appId);
    }
    
    addItemClick(form: NgForm) {
        this.newItem.productID = this.appId;
        this.newItem.enteredBy = this.user.userName; 
        this.insertItem(this.newItem, form);
    }

    addCommentClick(form:NgForm) {
        this.newComment.enteredBy = this.user.userName;
        this.insertComment(this.newComment, form);
    }

    getItems(app: number) {
        this.kbItemService.getKbItemsbyProduct(app).subscribe(res => {
            this.itemList = res.result.data;
            this.itemCount = this.itemList.length;
        })
    }

    getCommentsbyApp(product: number) {
        this.kbCommentService.getKbCommentsbyProduct(product).subscribe(res => {
            this.commentList = res.result.data; 
            this.commentCount = this.commentList.length;
        })
    }

    insertItem(item: KnowledgebaseItem, form: NgForm) {
        try {
            this.kbItemService.insertKbItembyProduct(item).subscribe(res => {
                if (res.result.message == 'Success') {
                    this.getItems(this.appId);
                    this.displayDialogAdd = false;
                    form.resetForm();
                    this.newItem = new KnowledgebaseItem;
                } else {
                    this.itemMessage = res.result.message;
                    this.displayItemMessage = true;
                }
            });
        } catch (err) {

        }
    }

    insertComment(comment: KnowledgebaseComment, form: NgForm) {
        try {
            this.kbCommentService.insertKbComment(comment).subscribe(res => {
                if (res.result.message == 'Success') {
                    this.getCommentsbyApp(this.appId);
                    this.displayDialogComment = false;
                    form.resetForm();
                    this.newComment = new KnowledgebaseComment;
                } else {
                    this.commentMessage = res.result.message;
                    this.displayCommentMessage = true;
                }
            });
        } catch (err) {

        }
    }
    
}