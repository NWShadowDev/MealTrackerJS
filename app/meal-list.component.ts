import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Meal } from './meal.model';


@Component({
  selector: 'meal-list',
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
  <option value="all">Show All</option>
  <option value="isDone">Show Meals above 500 cals</option>
  <option value="notDone" >Show Meals below 500 cals</option>
  </select>
  <div *ngFor="let currentMeal of childMealList | completeness:selectedCompleteness">
  <meal-display [meal]="currentMeal"></meal-display>
  <button (click)="editButtonHasBeenClicked(currentMeal)">Edit</button>
  </div>
  `
})

export class MealListComponent {
  @Input() childMealList: Meal[];
  @Output() clickSender = new EventEmitter();
  public selectedCompleteness: string = "notDone";
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
  editButtonHasBeenClicked(mealToEdit: Meal) {
    this.clickSender.emit(mealToEdit);
  }
}
