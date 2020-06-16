import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ContentComponent } from './content/content.component';
import { WorkComponent } from './work/work.component';
import { AboutComponent } from './aboutme/about.component';
import { BlogComponent } from './Blog/blog.component';
import { MatCardModule}  from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverComponent } from './cover/cover.component';



@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: ContentComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ContentComponent,
    WorkComponent,
    BlogComponent,
    AboutComponent,
    CoverComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/