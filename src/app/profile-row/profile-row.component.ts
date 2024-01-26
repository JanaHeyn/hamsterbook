import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
	selector: 'app-profile-row',
	templateUrl: './profile-row.component.html',
	styleUrl: './profile-row.component.scss'
})
export class ProfileRowComponent implements OnInit {
	@Input() name: string = 'Sweety';
	@Input() des: string = '3 Jahre alt';
	@Input() img: string = '/assets/img/hamster/hamster-01.jpeg';

	@Input() canFollow: boolean = true;

	// auch hier injecten wir nun des friend service
	constructor(public fs: FriendService) {}

	ngOnInit(): void {
		
	}
}
