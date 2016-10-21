import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MealListComponent } from './meal-list.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';


@NgModule({
  imports: [BrowserModule],
  declarations: [
    AppComponent,
    CaloriePipe,
    MealListComponent,
    NewMealComponent,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
