import { Component, type OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import type { User } from "../user-list/User.type";
import { CommonModule } from "@angular/common";

@Component({
	selector: "app-user-profile",
	standalone: true,
	imports: [CommonModule],
	templateUrl: "./user-profile.component.html",
	styleUrl: "./user-profile.component.css",
})
export class UserProfileComponent implements OnInit {
	apiUrl = "https://jsonplaceholder.typicode.com/users";

	itemId: string | null = null;
	user!: User;

	constructor(
		private route: ActivatedRoute,
		private http: HttpClient,
	) {}

	ngOnInit(): void {
		this.itemId = this.route.snapshot.paramMap.get("id");
		this.http.get<User>(`${this.apiUrl}/${this.itemId}`).subscribe({
			next: (data) => {
				this.user = data;
			},
			error: (error) => {
				console.error(error);
			},
		});
	}
}