import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: false
})

export class CaloriePipe implements PipeTransform {
  transform(input: Meal[], calories: string) {
    if (calories !== "all") {
      var output: Meal[] = [];
      if (calories == "low") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories < 500) {
            output.push(input[i]);
          }
        }
        return output;
      }else{
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories >= 500) {
            output.push(input[i]);
          }
        }
        return output;
      }
    }
    return input;
  }
}
