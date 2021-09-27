import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  isConnected : boolean = false

  constructor(
    private _authService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected
  }

}
