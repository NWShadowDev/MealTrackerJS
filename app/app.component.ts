import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class ="container">
      <div class="well" id="title">
        <h1>Welcome to the Meal Tracker</h1>
      </div>
      <new-meal
        (addClickSender) = "addClicked($event)"
      ></new-meal>
      <meal-list *ngIf = "masterMealList.length !== 0"
        [childMealList] = "masterMealList"
      ></meal-list>
    </div>
    `
  })
  export class AppComponent {
    public masterMealList: Meal [] = [
      new Meal("Macaroni & Cheese", "cheesy macaroni", 300),
      new Meal("Biscuits & Gravy", "comfort breakfast food", 500)
    ];
     addClicked(newMeal: Meal) {
       this.masterMealList.push(newMeal);
       console.log(this.masterMealList);
     }
  }
