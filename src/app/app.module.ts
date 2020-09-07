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

const ROUTES: Routes = [
  { path: 'ponies', component: PoniesComponent},
  { path: 'races', component: RacesComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    RacesComponent,
    PonyDetailsComponent,
    NameRacePipePipe,
    RaceDetailsComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
