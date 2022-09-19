import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  @Input()
  isMainPageVisible!: boolean;

  @Input()
  isPortfolioPageVisible!: boolean;

  @Input()
  isContactsPageVisible!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
