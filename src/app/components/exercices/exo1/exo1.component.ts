import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrls: ['./exo1.component.scss']
})
export class Exo1Component implements OnInit {

  temps : number = 0
  monInterval : any

  constructor() { }

  ngOnInit(): void {
  }

  start() : void {
    this.monInterval = setInterval(() => this.temps++, 1000)
  }

  pause() : void {
    clearInterval(this.monInterval)
    this.monInterval = null
  }

  reset() : void {
    this.pause()
    this.temps = 0
  }

}
