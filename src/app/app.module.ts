import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterModule} from '@angular/router'
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharacterComponent } from './character/character.component';
import { BookComponent } from './book/book.component';
import { HouseComponent } from './house/house.component';
import { HttpServiceService } from './http-service.service';
import { FilterCharacterComponent } from './filter-character/filter-character.component';
import { FilterbooksComponent } from './filterbooks/filterbooks.component';
import { FilterhousesComponent } from './filterhouses/filterhouses.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharacterComponent,
    BookComponent,
    HouseComponent,
    FilterCharacterComponent,
    FilterbooksComponent,
    FilterhousesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),

    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'character/:characterUrl',component:CharacterComponent},
      {path:'book/:bookUrl',component:BookComponent},
      {path:'house/:houseUrl',component:HouseComponent},
      {path:'filterHouse',component:FilterhousesComponent},
      {path:'filterCharacter',component:FilterCharacterComponent},
      {path:'filterBook',component:FilterbooksComponent},
      {path:'**',component:HomeComponent}

    ])
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}