import { Component, Input, OnInit } from '@angular/core';
import { Lien } from './lien.model';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() listeLien : Lien[] = []

  constructor() { }

  ngOnInit(): void {
   
  }

  toggleVisible(index : number) 
  {
    this.listeLien[index].isChildrenVisible = !this.listeLien[index].isChildrenVisible
  }

}
