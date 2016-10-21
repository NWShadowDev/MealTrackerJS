import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div *ngIf="childSelectedMeal">
      <h1>Edit Meal</h1>
      <div>
        <label>Enter Name of Item:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Enter Calories:</label>
        <input [(ngModel)]="childSelectedMeal.description">
      </div>
      <div>
        <label>Details:</label>
        <input [(ngModel)]="childSelectedMeal.id">
        <button (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditMealComponent {
  @Input() childSelectedMeal: Meal;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
