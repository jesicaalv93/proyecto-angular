import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from 'src/app/servicio/authorization.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private auth:AuthorizationService) {

  }

  ngOnInit(): void {

  }

  public get isLogin(): boolean {
    return this.auth.isUserLogIn();
  }

  public btnLogout():void {
    this.auth.logout();    
  }

}
