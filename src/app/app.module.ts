import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatInputModule} from '@angular/material/input';

import {SnackDialogComponent} from './util/snack.dialog.component';
import {MatCardModule, MatGridListModule, MatSelectModule} from '@angular/material';
import {RouterModule, Routes} from '@angular/router';
import {NewHeroFormComponent} from './hero/hero-form/new-hero-form.component';
import {MenuComponent} from './menu/menu.component';
import {ReactiveFormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'new-hero-form', component: NewHeroFormComponent },
  // { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    SnackDialogComponent,
    NewHeroFormComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatCardModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackDialogComponent]
})
export class AppModule { }
