import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent {

	postTexts = [
		'Mein Name ist Sweety. Ich esse gerne Erdbeeren.',
  		'Hallo zusammen. Freut mich, dass ihr hier seid.',
		'Hey mein Name ist Flo. Ich bin etwas schüchtern.',
		'Hallo mein Name ist Lucie. Ich bin hier, um Freunde zu treffen.',
	];

	postImages = [
		'assets/img/hamster/hamster-01.jpeg',
		'assets/img/hamster/hamster-02.jpeg',
		'assets/img/hamster/hamster-03.jpeg',
		'assets/img/hamster/hamster-04.jpeg',
	];

  	title = 'hamsterbook';
}
