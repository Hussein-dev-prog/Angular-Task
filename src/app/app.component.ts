import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route: Router, private service: UserService) { }

  title = 'taskapp';
  isMenuVisible = true;
  isadmin = false;
  ngDoCheck():void{
    const currentroute = this.route.url;
    if (currentroute == '/login' || currentroute == '/register') {
      this.isMenuVisible = false
    } else {
      this.isMenuVisible = true
    }
  }
}
