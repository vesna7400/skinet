import { Component, OnInit } from '@angular/core';
import { ShopComponent } from "./shop/shop.component";
import { NavBarComponent } from "./core/nav-bar/nav-bar.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone:true,
  imports: [ShopComponent, NavBarComponent]
})

export class AppComponent implements OnInit {
  title = 'Skinet';

  constructor() {}

  ngOnInit(): void {
  }
}
