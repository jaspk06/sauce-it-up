import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe-book/recipe.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() select = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onSelect(page: string) {
    this.select.emit(page);
  }
}
