import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo4',
  templateUrl: './demo4.component.html',
  styleUrls: ['./demo4.component.scss']
})
export class Demo4Component implements OnInit {

  maProp : string = ""

  isToggled : boolean = false

  liste : string[] = []

  constructor() { }

  ngOnInit(): void {
    this.liste = ['C#', 'Javascript', 'Typescript', 'T-Sql']
  }

  toggle() {
    this.isToggled = !this.isToggled
  }

}
