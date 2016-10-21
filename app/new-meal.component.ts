import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
  <h1>New Meal</h1>
  <div class="container">
  <label>Name of Meal Item:</label>
  <input #newDescription>
  <label>Calories:</label>
  <input #newCalories>
  <label>Details of Meal Item</label>
  <input #newDetails>
  <button (click)="
  addClicked(newName.value, newCalories.value, newDetails.value);
  newName.value='';
  newCalories.value='';
  newDetails.value=';'
  ">Add</button>
  </div>
  `
})

export class NewMealComponent {
  @Output() newMealSender = new EventEmitter();
  addClicked(name: string, calories: number, details: string ) {
    var newMealToAdd: Meal = new Meal(name, calories, details);
    this.newMealSender.emit(newMealToAdd);
  }
}
