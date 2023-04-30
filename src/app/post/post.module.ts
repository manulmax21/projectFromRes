import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { PostComponent } from './post.component';

@NgModule({
  declarations: [
    PostComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    PostComponent
  ],
  bootstrap: [PostComponent]
})
export class PostModule { }
