import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'app-pizza-container',
  templateUrl: './pizza-container.component.html',
  styleUrls: ['./pizza-container.component.css']
})
export class PizzaContainerComponent {
  @Input() pizzas: Pizza[] = [];
  @Output() pizzaSelected = new EventEmitter<Pizza>();
  selectedPizza: Pizza = { name: '', img: '', desc: '' }; // Initialisation avec une valeur par défaut

  onPizzaSelected(pizza: Pizza): void {
    this.selectedPizza = pizza;
    this.pizzaSelected.emit(pizza);
  }
}
