import {Component, Input, OnInit} from '@angular/core';
import {Pony} from '../pony';

@Component({
  selector: 'app-pony-details',
  templateUrl: './pony-details.component.html',
  styleUrls: ['./pony-details.component.css']
})
export class PonyDetailsComponent implements OnInit {
  @Input() pony: Pony;
  constructor() { }

  ngOnInit(): void {
  }

}
