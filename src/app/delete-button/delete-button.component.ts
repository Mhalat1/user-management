import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-delete-button',
  standalone: true,
  imports: [CommonModule],
  template: '<button (click)="onDelete()">X Delete </button>',
  styleUrl: './delete-button.component.css'
})
export class DeleteButtonComponent {
  @Output() delete = new EventEmitter<void>();

onDelete() {
  this.delete.emit(); 
  }
}

