import { Component, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal', //Add a meal form
  template: `
    <div class ="well">
      <div class="form-group">
      <label>Name of Meal:</label>
      <input class="form-control" type="text" #addMealName>
      </div>
      <div class="form-group">
      <label>Describe the Meal:</label>
      <input class="form-control" type="text" #addMealDetails>
      </div>
      <div class="form-group">
      <label>Calories:</label>
      <input class="form-control" type="text"#addMealCalories>
      </div>
      <button class="btn btn btn-success"
        (click)="addMealClickedHandler(
        addMealName.value,
        addMealDetails.value,
        addMealCalories.value);

        addMealName.value = '';
        addMealDetails.value = '';
        addMealCalories.value =add;
        ">Add Meal
      </button>
    </div>
    `
  })
  export class NewMealComponent {
    @Output() addMealSender = new EventEmitter();
    addMealClickedHandler(name: string, details: string, calories: string) {
       this.addMealSender.emit(new Meal(name,details,parseInt(calories))); //we have to parse the calorie value because its in as a string
       //console.log(new Meal(name,details,parseInt(calories)));
     }
  }
