import { Component } from '@angular/core';
import { Lien } from './shared/nav/lien.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FSAzure21';

  menu : Lien[] = [
    {title : "Home", url : 'home'},
    {title : "About", url : 'about'},
    {title : "Démos", children : [
      {title : "Demo 1 - Bindings", url : 'demo/demo1'},
      {title : "Demo 2 - Pipes", url : 'demo/demo2'},
      {title : "Demo 3 - Component Directives", url : 'demo/demo3'},
      {title : "Demo 4 - Structural Directives", url : 'demo/demo4'},
      {title : "Demo 5 - @Input/@Output", url : 'demo/demo5'},
      {title : "Demo 6 - Services & Dependancy Injection", url : 'demo/demo6'},
    ]},

    {title : "Exercices", children : [
      {title : 'Chronomètre', url : 'exercices/exo1'},
      {title : 'Shopping List', url : 'exercices/exo2'},

    ]}

  ]
}
