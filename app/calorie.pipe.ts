import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: true
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], emptiness) {

    return input;
  }
}
