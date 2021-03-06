import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private _userService: UserService){ }

  ngOnInit() {
      if(!this._userService.logged_in_user._id){
          this._userService.getUserStored()
            .subscribe(user => console.log('USER', user), error => console.log(error));
      }

  }

  logout(){
    this._userService.logout();
  }
}
