import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamster-card',
  templateUrl: './hamster-card.component.html',
  styleUrl: './hamster-card.component.scss'
})
export class HamsterCardComponent implements OnInit {
	//mit @Input können wir von außen etwas reingeben, also von der uebergeordneten app Komp
	@Input() text: string = '';

	@Input() img: string = '';

	constructor() {}

	ngOnInit(): void {

	}

}
