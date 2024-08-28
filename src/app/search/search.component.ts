import { Component, EventEmitter, Output } from "@angular/core";
import { FormsModule } from "@angular/forms";
 
@Component({
  selector: "app-search",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./search.component.html",
  styleUrl: "./search.component.css",
})
export class SearchComponent {
  searchText = "";
  @Output() searchChange = new EventEmitter<string>();
 
  sendSearchCriteria() {
    console.log('SEARCH', this.searchText);
    this.searchChange.emit(this.searchText);
  }
 
  clearInput() {
    this.searchText = "";
    this.sendSearchCriteria();
  }
}