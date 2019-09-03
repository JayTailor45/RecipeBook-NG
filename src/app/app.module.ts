import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule, AngularFireAuth } from '@angular/fire/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MarkdownModule } from 'ngx-markdown';
import { ImageCropperModule } from 'ngx-image-cropper';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
import { LoginComponent } from './login/login.component';
import { environment } from 'src/environments/environment';
import { AuthGuardService } from './services/auth-guard.service';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeAddEditModalComponent } from './common/recipe-add-edit-modal/recipe-add-edit-modal.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, 
    HomeComponent, 
    FooterComponent, 
    JumbotronComponent, 
    CategoryComponent, 
    LoginComponent, 
    PageNotFoundComponent, 
    DashboardComponent, 
    RecipeAddEditModalComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    FormsModule,
    AuthGuardService,
    NgbModalModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MarkdownModule.forRoot(),
    ImageCropperModule,
    MatChipsModule,
    MatAutocompleteModule,
    ReactiveFormsModule
  ],
  entryComponents : [
    RecipeAddEditModalComponent
  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
