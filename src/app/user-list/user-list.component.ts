import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { SearchComponent } from "../search/search.component";
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './User.type';
import { HttpClient } from '@angular/common/http';
@Component({
	selector: 'app-user-list',
	standalone: true,
	imports: [CommonModule, UserDetailComponent, SearchComponent, DeleteButtonComponent,HttpClient],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css'

})
export class UserListComponent implements OnInit {
	users: User[] = [];
	searchText = "";

	constructor(private http: HttpClient) {
		
	}

	ngOnInit(): void {
		this.http.get<User[]>('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
			this.users = data;
		});
		
	}
	// async ngOnInit(): Promise<void> {
	// 	try {
	// 		const response = await fetch('https://jsonplaceholder.typicode.com/users');
	// 		if (!response.ok) {
	// 			throw new Error(response.statusText);
	// 		}
	// 		this.users = await response.json();
	// 	} catch (error) {
	// 		console.error(error);
	// 	}
	// }

	deleteUser(userId: number) {
		// Suppression d'un utilisateur
		this.users = this.users.filter(user => user.id !== userId);
	}
	onSearchChange(search: string) {
		console.log('SEARCH', search);

	}
}
