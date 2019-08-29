import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./common/header/header.component";
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './common/footer/footer.component';
import { JumbotronComponent } from './common/jumbotron/jumbotron.component';
import { CategoryComponent } from './category/category.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, JumbotronComponent, CategoryComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
