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
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { PonyComponent } from "./pony/pony.component";
import { AddRaceComponent } from './add-race/add-race.component';
import { PonyReactiveComponent } from './pony-reactive/pony-reactive.component';
import { AddRaceReactiveComponent } from './add-race-reactive/add-race-reactive.component';


const ROUTES: Routes = [
  { path: '', component: PoniesComponent},
  { path: 'races', component: RacesComponent},
  { path: 'add-pony', component: PonyReactiveComponent},
  { path: 'update-pony/:id', component: PonyComponent},
  { path: 'add-race', component: AddRaceComponent},
  { path: 'update-race/:id', component: AddRaceComponent},
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
    AddRaceComponent,
    PonyReactiveComponent,
    AddRaceReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
