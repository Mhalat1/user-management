import { CommonModule } from '@angular/common';
import { UserDetailComponent } from '../user-detail/user-detail.component';
import { SearchComponent } from "../search/search.component";
import { DeleteButtonComponent } from '../delete-button/delete-button.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from './User.type';
import { HttpClient } from '@angular/common/http';
import { FilterPipe } from '../filter.pipe';

@Component({
	selector: 'app-user-list',
	standalone: true,
	imports: [CommonModule, FilterPipe, UserDetailComponent, SearchComponent, DeleteButtonComponent],
	templateUrl: './user-list.component.html',
	styleUrl: './user-list.component.css'
})


export class UserListComponent implements OnInit {
	users: User[] = [];
	searchText = "";
	testDate = new Date();
	filteredUsers: User[] = [];
	apiUrl = "https://jsonplaceholder.typicode.com/users";
	constructor(private http: HttpClient) {
		
	}
	ngOnInit(): void {
		this.http.get<User[]>(this.apiUrl).subscribe({
			next: (data) => {
				this.users = this.filteredUsers = data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}

	deleteUser(userId: number) {
		// Suppression d'un utilisateur
		this.users = this.users.filter(user => user.id !== userId);
		this.filteredUsers = this.filteredUsers.filter(user => user.id !== userId);
	}

	onSearchChange(search: string) {
		this.filteredUsers = this.users.filter((user) =>
			user.name.toLowerCase().includes(search.toLowerCase()),);
	}
}
