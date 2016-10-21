import { Component } from '@angular/core';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  template: `
    <div class ="container">
      <div class="container" id="title">
         <img id="banner" src ="resources/img/banner.png">
      </div>
      <new-meal
        (addMealSender) = "addMeal($event)"
      ></new-meal>
      <div class="well"><h3> Current Meals </h3></div> <!--Default Meals List-->
      <meal-list *ngIf = "masterMealList.length !== 0"
        [childMealList] = "masterMealList"
      ></meal-list>
    </div>
    `
  })
  export class AppComponent {
    public masterMealList: Meal [] = [
      new Meal("Macaroni & Cheese", "cheesy macaroni", 300), //here are the default added meals to show the user the format
      new Meal("Biscuits & Gravy", "comfort breakfast food", 500)
    ];
     addMeal(newMeal: Meal) { //adding a new meal entry
       this.masterMealList.push(newMeal);

      // I want a condition when a property of a meal is not entered, to alert to enter in fields
     // eg: If the user doesn't enter a number for the calories, but instead enters a letter or nothing, I want an alert
     }
  }
