import { Component, OnInit } from '@angular/core';
import { Race } from '../race';
import {RACES} from '../mock-races';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.css']
})
export class RacesComponent implements OnInit {
  Races: Race[];

  constructor() {
    this.Races = RACES;
  }

  ngOnInit(): void {
  }

}
