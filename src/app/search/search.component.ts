import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

  

export class SearchComponent {
[x: string]: any;
  searchText ="";
  @Output() searchChange = new EventEmitter<string>();

  onInput(){
    console.log('SEARCH', this.searchText)
    this.searchChange.emit(this.searchText);
  }

cleatInput(){
  this.searchText = '';
  console.log(this.searchText)
}

}
