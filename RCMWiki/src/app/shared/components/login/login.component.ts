import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import User from '../../../models/user.model';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit { 

    userLoggedIn: boolean = false;
    user: User = new User;
   
    constructor(
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void{
        if (sessionStorage.getItem('userLoggedIn') == 'true') {
            this.router.navigateByUrl('');
        }

    }

    onSubmit() {
        sessionStorage.setItem('userLoggedIn', 'true');
        sessionStorage.setItem('user', JSON.stringify(this.user));
        this.userLoggedIn = true;
        this.router.navigateByUrl('');
    }
}