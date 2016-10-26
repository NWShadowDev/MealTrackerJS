
import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class ="well">
      <div class="form-group">
        <label>Name of the Meal:</label>
        <input class="form-control" type="text" #newMealName>
      </div>
      <div class="form-group">
        <label>Details about the Meal:</label>
        <input class="form-control" type="text" #newMealDetails>
      </div>
      <div class="form-group">
        <label>Number of calories:</label>
        <input class="form-control" type="text"#newMealCalories>
      </div>
      <button class="btn"
        (click)="addClickedHandler(
        newMealName.value,
        newMealDetails.value,
        newMealCalories.value);
        newMealName.value = '';
        newMealDetails.value = '';
        newMealCalories.value = '';
        ">Add Meal
      </button>
    </div>
    `
  })

  export class NewMealComponent {
    @Output() addClickSender = new EventEmitter();
    addClickedHandler(name: string, details: string, calories: string) {
       this.addClickSender.emit(new Meal(name,details,parseInt(calories)));
     }
  }
