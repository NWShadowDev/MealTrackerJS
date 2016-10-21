
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'edit-meal',
  template: `
    <div class ="well" *ngIf ="childSelectedMeal">
      <h2>Edit Meal</h2>
      <div class="form-group">
        <label>Edit Meal Name:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.name">
      </div>
      <div class="form-group">
        <label>Edit Details:</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.details">
      </div>
      <div class="form-group">
        <label>Edit the Calories(#):</label>
        <input class="form-control" [(ngModel)]="childSelectedMeal.calories">
      </div>
      <button class="btn"(click)="doneClickedHandler()">Done</button>
    </div>
    `
  })

  export class EditMealComponent {
    @Input() childSelectedMeal: Meal;
    @Output() doneClickedSender = new EventEmitter();
    doneClickedHandler() {
      this.doneClickedSender.emit();
    }
  }
