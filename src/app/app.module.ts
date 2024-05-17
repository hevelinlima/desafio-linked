import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { BoosterDisplayComponent } from './components/booster-display/booster-display.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    BoosterDisplayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
