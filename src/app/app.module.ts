import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {PostModule} from "./post/post.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {NgxPaginationModule} from "ngx-pagination";
import { HeaderComponent } from './header/header.component';
import { FuterComponent } from './futer/futer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FuterComponent,
  ],
  imports: [
    BrowserModule,
    PostModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
