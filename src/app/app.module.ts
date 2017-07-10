

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { CardComponent } from './card/card.component';
import { CribsService } from './services/cribs.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe'


@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [

    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CribsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
