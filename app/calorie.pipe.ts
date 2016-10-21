import { Pipe, PipeTransform } from '@angular/core';
import { Meal } from './meal.model';

@Pipe({
  name: "calorie",
  pure: true
})

export class CaloriePipe implements PipeTransform {  //Sorting Pipe by number of calories
  transform(input: Meal[], calories: string) {
    if (calories !== "all") {
      var output: Meal[] = [];
      if (calories == "low") {
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories < 500) {
            output.push(input[i]);  //show Meals with a parsed string of less than 500 calories
          }
        }
        return output;
      }else{
        for (let i = 0; i < input.length; i++) {
          if (input[i].calories >= 500) {
            output.push(input[i]); //show Meals with a parsed string of more than 500 calories
          }
        }
        return output;
      }
    }
    return input;
  }
}
