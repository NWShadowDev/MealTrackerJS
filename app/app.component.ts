import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
 <div class="container">
 <img id="banner" src ="resources/img/banner.png">
  </div>
  <div class="container">
      <edit-meal
        [childSelectedMeal]="selectedMeal"
        (doneClickedSender)="finishedEditing()"
      ></edit-meal>
        <new-meal
          (addClickSender)="addMeal($event)"
        ></new-meal>
        <meal-list
        [childMealList]="masterMealList"
        (selectedMealSender)="showDetails($event)"
        ></meal-list>
    </div>
  `
})

export class AppComponent {
  public masterMealList: Meal[] = [
    new Meal("Macaroni & Cheese", "cheesy macaroni", 300), //here are the default added meals to show the user the format
    new Meal("Biscuits & Gravy", "comfort breakfast food", 500)
    ];
  selectedMeal: Meal = null;
  showDetails(clickedMeal: Meal){
    this.selectedMeal = clickedMeal;
  }
  finishedEditing(){
    this.selectedMeal = null;
  }
  addMeal(newMealFromChild: Meal) {
    this.masterMealList.push(newMealFromChild);
  }
  doneClickedSender(){
  this.selectedMeal = null;
  }
}
