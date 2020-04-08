import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { CourseComponent } from './courses.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from './services/course.service';
import { DataEventComponent } from './data-event/data-event.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { KeyValuePipe, UpperCasePipe, LowerCasePipe, TitleCasePipe } from '@angular/common';
import { CarouselComponent } from './carousel/carousel.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TextFormatingPipe } from './common/pipe/text-formating.pipe';
// import { ProductViewComponent } from './product-view/product-view.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BasicComponent } from './layout/basic/basic.component';
// import { HeaderComponent } from './common/header/header.component';
import { DirectiveComponent } from './directive/directive.component';
import { ProductViewComponent } from './product-list/product-view/product-view.component';
import { HeaderComponent } from './common/header/header.component';
import { NameValidationDirective } from './common/directive/name-validation.directive';
import { ShowCustomDirectiveComponent } from './show-custom-directive/show-custom-directive.component';
import { ContactFormComponent } from './forms/contact-form/contact-form.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { SignUpComponent } from './forms/sign-up/sign-up.component';
import { SignInComponent } from './forms/sign-in/sign-in.component';
import { Contact1Component } from './forms/contact1/contact1.component';
import { ToDolistComponent } from './forms/to-dolist/to-dolist.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    // CourseComponent,
    CoursesComponent,
    DataEventComponent,
    BindingComponent,
    PipesComponent,
    CarouselComponent,
    TextFormatingPipe,
    ProductViewComponent,
    ProductListComponent,
    BasicComponent,
    // HeaderComponent,
    DirectiveComponent,
    HeaderComponent,
    NameValidationDirective,
    ShowCustomDirectiveComponent,
    ContactFormComponent,
    FavouriteComponent,
    SignUpComponent,
    SignInComponent,
    Contact1Component,
    ToDolistComponent,
    PostComponent,
    LifeCycleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    CourseService,
    KeyValuePipe,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
