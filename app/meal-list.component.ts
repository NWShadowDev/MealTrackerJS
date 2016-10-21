import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class ="well">
      <div class="form-group">
        <label>Filter by Calories</label>
        <select (change)="onCalorieChange($event.target.value)" class="filter form-control">
          <option value="all" selected="selected">Show All Meals</option> <!--default selected drop down value-->
          <option value="low">Low Calorie (under 500 cals)</option>
          <option value="high">High Calorie (over 500 cals)</option>
        </select>
      </div>
      <div class="row">
        <div class="col-xs-3" *ngFor=" let currentMeal of childMealList | calorie:desiredCalories">
          <div class="well">
            <label>Name: {{currentMeal.name}}</label>
            <label>Details: {{currentMeal.details}}</label>
            <label>Calories: {{currentMeal.calories}}</label>
            <button (click)="onEditClick(currentMeal)" class="btn">Edit</button>
          </div>
        <div>
      </div>
    </div>
    `
  })
  export class MealListComponent {
    public desiredCalories: string = "all";
    @Input() childMealList: Meal[];
    @Output() selectedMealSender = new EventEmitter();
    onCalorieChange(selection: string){
      this.desiredCalories = selection; //picking your desired selection of all, under 500 calories, or over 500 calories and showing the asked for selection from the menu
    }

    onEditClick(currentMeal: Meal) {
      this.selectedMealSender.emit(currentMeal);
    }
  }
