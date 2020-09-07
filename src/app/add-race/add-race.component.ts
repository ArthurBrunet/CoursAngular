import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PONIES} from "../mock-ponies";
import {Race} from "../race";
import {RACES} from "../mock-races";

@Component({
  selector: 'app-add-race',
  templateUrl: './add-race.component.html',
  styleUrls: ['./add-race.component.css']
})
export class AddRaceComponent implements OnInit {
  newRace: Race;
  poniesBool = Array<boolean>();
  allPonies = PONIES
  constructor(private router : Router) {
    this.newRace = new Race();
    for (let i = 0; i < PONIES.length; i++){
      this.poniesBool.push(false)
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.poniesBool.forEach((item,index)=>{
      if (this.poniesBool[index]){
        this.newRace.ponies.push(this.allPonies[index])
      }
    })
    RACES.push(this.newRace);
    this.router.navigate(['/races'])
  }

}
