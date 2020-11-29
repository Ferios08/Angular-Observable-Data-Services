import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'user';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  user: User = {
    fullname: "User 1",
    email: "user1@mail.com"
  }

  constructor() {
    this.currentUserSubject = new BehaviorSubject<User>(this.user);
    this.currentUser = this.currentUserSubject.asObservable();
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
  public changeUser(newValue) {
    this.currentUserSubject.next(newValue)
}
}
