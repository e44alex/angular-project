import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { TestFromComponentComponent } from './test-from-component/test-from-component.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestFromComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
