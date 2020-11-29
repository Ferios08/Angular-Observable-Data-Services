import { Component, OnInit } from '@angular/core';
import { User } from 'user';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-target',
  templateUrl: './target.component.html',
  styleUrls: ['./target.component.css']
})
export class TargetComponent implements OnInit {
  currentUser: User;
  newUser: User = {
    fullname: "User 2",
    email: "user2@mail.com"
  }

  constructor(
    private sharedService: SharedService ,
  ) {
    this.sharedService.currentUser.subscribe(x => this.currentUser = x);
   }

  ngOnInit() {
  }
update(){
  this.sharedService.changeUser(this.newUser);
}

}
