import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import  { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import  { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AssignmentComponent } from './assignment/assignment.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component'
import { coffeeReducer } from './shared/store/coffeeData.reducer';
import { CoffeeEffects } from './shared/store/coffeeData.Effects';

@NgModule({
  declarations: [
    AppComponent,
    AssignmentComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    StoreModule.forRoot({ coffeeList: coffeeReducer }),
    StoreModule.forFeature('coffee data', coffeeReducer),
    EffectsModule.forRoot([CoffeeEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
