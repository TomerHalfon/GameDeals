import { Component, Input, OnInit } from '@angular/core';
import { Giveaway } from '../models/giveway.model';

@Component({
  selector: 'app-giveaways-list',
  templateUrl: './giveaways-list.component.html',
  styleUrls: ['./giveaways-list.component.css']
})
export class GiveawaysListComponent implements OnInit {

@Input()
giveaways:Giveaway[]
  constructor() { }

  ngOnInit(): void {
  }

}
