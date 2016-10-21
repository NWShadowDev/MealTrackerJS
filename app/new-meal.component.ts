import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  template: `
    <div class ="well">
      <div class="form-group">
      <label>Enter the name of the meal:</label>
      <input class="form-control" type="text" #newMealName>
      </div>
      <div class="form-group">
      <label>Enter the details about the meal:</label>
      <input class="form-control" type="text" #newMealDetails>
      </div>
      <div class="form-group">
      <label>Enter the number of calories:</label>
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
    @Output() addMealSender = new EventEmitter();
    addMealClickedHandler(name: string, details: string, calories: string) {
       this.addMealSender.emit(new Meal(name,details,parseInt(calories)));
       //console.log(new Meal(name,details,parseInt(calories)));
     }
  }
