import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  User:string = "";

  constructor(private _Auht:AuthService) {
    this.User=_Auht.loginedUser;
   }

  ngOnInit(): void {
  }

}
