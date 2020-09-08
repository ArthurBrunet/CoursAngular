import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {Pony} from "../pony";
import {PONIES} from "../mock-ponies";
import {RACES} from "../mock-races";
import {Race} from "../race";

@Component({
  selector: 'app-add-race-reactive',
  templateUrl: './add-race-reactive.component.html',
  styleUrls: ['./add-race-reactive.component.css']
})
export class AddRaceReactiveComponent implements OnInit {

  raceForm = this.fb.group({
    location: ['', Validators.required],
    date: [Date, Validators.required],
    ponies: [this.fb.array([]), Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let res: Race;
    res = this.raceForm.value;
    RACES.push(res);
    this.router.navigate(['/races']);
  }
}
