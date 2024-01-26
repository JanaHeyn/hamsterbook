import { Injectable } from '@angular/core';

// injectable = es kann in jeder Komponente verwendet werden
// von der root ebene aus, kann das nun verwendet werden
@Injectable({
	providedIn: 'root'
})
export class FriendService {
	// hier muss eine explizite typisierung der leeren arrays stattfinden
  	names: string[] = [];
	texts: string[] = [];
	images: string[] = [];

	constructor() { }

	addFriend(name:string, text:string, image:string) {
		this.names.push(name);
		this.texts.push(text);
		this.images.push(image);

	}
}
