import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CoursesComponent } from './courses/courses.component';
import { FormsModule } from '@angular/forms';
import { TestFromComponentComponent } from './test-from-component/test-from-component.component';
import { AnimationsComponent } from './animations/animations.component';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    TestFromComponentComponent,
    AnimationsComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: 'form', component: TestFromComponentComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'animations', component: AnimationsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
