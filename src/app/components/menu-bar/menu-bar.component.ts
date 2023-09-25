import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {
  @Input()
	gameCover:string =""
	@Input()
	gameLabel:string = ""
	@Input()
	gameType:string ="Digital PS4"
	@Input()
	gamePrice:string="R$399,90"

  constructor() { }

  ngOnInit(): void {
  }
}
