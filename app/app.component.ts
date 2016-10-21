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
      <h3> Current Meals </h3> <!--Default Meals List-->
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
     addMeal(newMeal: Meal) { //adding
       this.masterMealList.push(newMeal);
      //  console.log(this.masterMealList);
     }
  }
