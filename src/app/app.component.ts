import { Component } from '@angular/core';

class Food {
	// unlike javascript, you can declare types in typescript
	name: string;
	isFavorite: boolean;
}

const FOOD: Food[] = [
	{
		name: "Eggs",
		isFavorite: true
	},
	{
		name: "Milk",
		isFavorite: false
	},
	{
		name: "Jello",
		isFavorite: true
	}
]

// @Component decorator tells Angular that this is a component, the metadata connects it to its html and css
@Component({
  	selector: 'app-root',
  	templateUrl: './app.component.html',
  	styleUrls: ['./app.component.css']
})
export class AppComponent {
  	title = 'hello word';
  	// food: Food = {
  	//    name: "Eggs",
  	//    isFavorite: true,
  	// }
  	foods = FOOD;
  	selectedFood: Food;
  	onSelect(food: Food) : void {
		this.selectedFood = food;
  	}
}
