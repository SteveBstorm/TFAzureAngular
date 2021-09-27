import { Component, OnInit } from '@angular/core';
import { Lien } from './lien.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  listeLien : Lien[] = []

  constructor() { }

  ngOnInit(): void {
    this.listeLien = [
      {title : "Home", url : 'home'},
      {title : "About", url : 'about'},
      
    ]
  }

}
