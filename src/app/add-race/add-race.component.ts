import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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
  add: boolean;
  constructor(private router : Router, private route: ActivatedRoute) {
    this.newRace = new Race();
    this.add = true;
    for (let i = 0; i < PONIES.length; i++){
      this.poniesBool.push(false)
    }
  }

  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id') == null){
      this.add = true;
    }else{
      this.add = false;
      const id = parseInt(this.route.snapshot.paramMap.get('id'),0);
      for (let index = 0; index < RACES.length; index++){
        if (RACES[index].id_race == id){
          this.newRace = RACES[index];
          break
        }
      }
    }
  }

  onSubmit(): void {
    if(this.add){
      this.poniesBool.forEach((item,index)=>{
        if (this.poniesBool[index]){
          this.newRace.ponies.push(this.allPonies[index])
        }
      })
      RACES.push(this.newRace);
    }else{
      console.log('update race');
    }
    this.router.navigate(['/races'])
  }

}
