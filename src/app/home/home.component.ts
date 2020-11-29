import { Component, OnInit } from '@angular/core';
import { User } from 'user';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;
  constructor(
    private sharedService: SharedService ,
  ) {
    this.sharedService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }

}
