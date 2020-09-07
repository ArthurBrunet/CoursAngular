import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RacesComponent } from './races/races.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { NameRacePipePipe } from './name-race-pipe.pipe';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";
import { PonyComponent } from "./pony/pony.component";
import { AddRaceComponent } from './add-race/add-race.component';

const ROUTES: Routes = [
  { path: '', component: PoniesComponent},
  { path: 'races', component: RacesComponent},
  { path: 'add-pony', component: PonyComponent},
  { path: 'add-race', component: AddRaceComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailsComponent,
    NameRacePipePipe,
    RaceDetailsComponent,
    MenuComponent,
    PonyComponent,
    AddRaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
