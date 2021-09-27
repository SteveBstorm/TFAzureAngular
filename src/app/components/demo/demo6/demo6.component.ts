import { Component, OnInit } from '@angular/core';
import { FakeauthService } from 'src/app/services/fakeauth.service';

@Component({
  selector: 'app-demo6',
  templateUrl: './demo6.component.html',
  styleUrls: ['./demo6.component.scss'],
  //providers : [FakeauthService]
})
export class Demo6Component implements OnInit {

  isConnected : boolean = false

  constructor(
    private _authService : FakeauthService
  ) { }

  ngOnInit(): void {
    this.isConnected = this._authService.isConnected
  }

  login() {
    this._authService.connect()
    this.isConnected = this._authService.isConnected
  }

  logout() {
    this._authService.disconnect()
    this.isConnected = this._authService.isConnected
  }

}
