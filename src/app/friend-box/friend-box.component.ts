import { Component, OnInit } from '@angular/core';
// der service, die DI, muss erst importiert werden...
import { FriendService } from '../friend.service';

@Component({
  	selector: 'app-friend-box',
  	templateUrl: './friend-box.component.html',
  	styleUrl: './friend-box.component.scss'
})
export class FriendBoxComponent implements OnInit {

	// .. und hier wird der Service, die Dependency Injection eingefügt
	// mit public wird das initiiert
	// dann der Name, wie es innerhalb der nutzenden Komp heißen soll
	// und zum Schluss, wie der Service heißt
	constructor(public fs: FriendService) {}

	ngOnInit(): void {
	
	}

}
