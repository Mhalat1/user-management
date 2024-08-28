import { Pipe, type PipeTransform } from "@angular/core";
import { User } from "./user-list/User.type";

@Pipe({
	name: "filter",
	standalone: true,
})
export class FilterPipe implements PipeTransform {
	transform(users: User[], searchText: string): User[] {
		if (!users || !searchText) {
			return users;
		}
		return users.filter(
			(user) =>
				user.name.includes(searchText) || user.email.includes(searchText),
		);
	}
}