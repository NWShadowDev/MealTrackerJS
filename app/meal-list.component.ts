import { Component, Input } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  template: `
    <div class ="well">
      <div class="row">
        <div class="col-md-4" *ngFor=" let currentMeal of childMealList">
          <div class="well">
            <label>Name: {{currentMeal.name}}</label>
            <label>Details: {{currentMeal.details}}</label>
            <label>Calories: {{currentMeal.calories}}</label>
          </div>
        <div>
      </div>
    </div>
    `
  })
  export class MealListComponent {
    @Input() childMealList: Meal[];

  }
