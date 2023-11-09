import { Component } from '@angular/core';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css']
})
export class PizzaContainerComponent {
  selectedPizza!: Pizza;

  onPizzaSelected(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
}
