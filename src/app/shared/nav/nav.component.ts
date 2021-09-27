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
      {title : "Démos", children : [
        {title : "Demo 1 - Bindings", url : 'demo/demo1'},
        {title : "Demo 2 - Pipes", url : 'demo/demo2'},
        {title : "Demo 3 - Component Directives", url : 'demo/demo3'},
        {title : "Demo 4 - Structural Directives", url : 'demo/demo4'},
      ]},

      {title : "Exercices", children : [
        {title : 'Chronomètre', url : 'exercices/exo1'}
      ]}

    ]
  }

  toggleVisible(index : number) 
  {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
