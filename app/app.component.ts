import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Meal Tracker</h1>
    <meal-list
      [childMealList]="masterMealList"
      (clickSender)="showDetails($event)"
     ></meal-list>
    <edit-meal
      [childSelectedMeal]="selectedMeal"
      (doneClickedSender)="finishedEditing()"
    ></edit-meal>
    <new-meal
      (newMealSender)="addMeal($event)"
    ></new-meal>
  </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
      new Meal("Macaroni and Cheese", 300, "cheesy pasta"),
      new Meal("Chicken Parmesan", 500, "Stuffed chicken with parmesan and marinara"),
      new Meal("Grilled Cheese Sandwhich", 400, "Grilled Bread, melted cheddar cheese"),
      new Meal("Applesauce", 80, "ground apples and cinnamon")
  ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal) {
    this.selectedMeal = clickedMeal;
  }
  finishedEditingMeal() {
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
}
