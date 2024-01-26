import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-proposals',
	templateUrl: './proposals.component.html',
	styleUrl: './proposals.component.scss'
})
export class ProposalsComponent implements OnInit {

	names = [
		'Tim', 
		'Ulla', 
		'Henri', 
		'Lori'
	];
	texts = [
		'2 Jahre alt', 
		'Gräbt gerne Löcher', 
		'Spielt gerne', 
		'Chillt gerne'
	];
	images = [
		'/assets/img/hamster/hamster-05.jpeg', 
		'/assets/img/hamster/hamster-06.jpeg', 
		'/assets/img/hamster/hamster-07.jpeg', 
		'/assets/img/hamster/hamster-08.jpeg'
	];

	constructor() {};

	ngOnInit(): void {
		
	}

}
