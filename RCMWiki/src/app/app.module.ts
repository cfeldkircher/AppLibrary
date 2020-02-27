import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule, SharedModule } from 'primeng/primeng';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { InputTextareaModule } from 'primeng/inputtextarea';

import { AppComponent } from './app.component';
import { HomeComponent } from '../app/core/home/home.component';
import { HeaderComponent } from '../app/core/header/header.component';
import { LoginComponent } from '../app/shared/components/login/login.component';
import { SearchComponent } from '../app/core/search/search.component';
import { ProductComponent } from '../app/shared/components/product/product.component';
import { ProductViewComponent } from '../app/shared/components/product/productview/productview.component';
import { ProductEditComponent } from '../app/shared/components/product/productedit/productedit.component';
import { DocumentListComponent } from '../app/shared/components/documentlist/documentlist.component';
import { KnowledgebaseComponent } from '../app/shared/components/knowledgebase/knowledgebase.component';

import { ProductService } from '../app/services/product.service';
import { SharepointService } from '../app/services/sharepoint.service';
import { KnowledgebaseItemService } from '../app/services/kbitem.service';
import { KnowledgebaseCommentService } from '../app/services/kbcomment.service';
import { JiraService } from '../app/services/jira.service';

import { SanitizeHtmlPipe } from '../app/pipes/domsanitizer';
import { FilterPipe } from '../app/pipes/arrayfilter';
import { SearchPipePipe } from '../app/pipes/arrayFilterContains';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'header', component: HeaderComponent },
    { path: 'search/product/:productId', component: SearchComponent },
    { path: 'login', component: LoginComponent },
    { path: 'product', component: ProductComponent },
    { path: 'productedit', component: ProductEditComponent },
    { path: 'productview', component: ProductViewComponent },
    { path: 'knowledgebase', component: KnowledgebaseComponent },
    { path: '', component: SearchComponent }
]

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        TableModule,
        DialogModule,
        DropdownModule,
        SharedModule,
        AutoCompleteModule,
        ButtonModule,
        ScrollPanelModule,
        SidebarModule,
        AccordionModule,
        InputTextareaModule,
        PanelModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        LoginComponent,
        SearchComponent,
        ProductComponent,
        ProductViewComponent,
        ProductEditComponent,
        DocumentListComponent,
        KnowledgebaseComponent,
        SanitizeHtmlPipe,
        FilterPipe,
        SearchPipePipe
    ],
    providers: [
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        HttpClientModule,
        ProductService,
        SharepointService,
        KnowledgebaseItemService,
        KnowledgebaseCommentService,
        JiraService
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
