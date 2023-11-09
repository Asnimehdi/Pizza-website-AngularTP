import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Pizza } from '../shared/pizza.model';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  public pizzas: Pizza[] = [];
  @Output() pizzaSelected = new EventEmitter<Pizza>();

  constructor() {}

  ngOnInit(): void {
    this.pizzas = [
      new Pizza('Pizza 4 Fromages', 'url_de_l_image', 'Quatre fromages délicieux'),
      new Pizza('Pizza 4 Viandes', 'url_de_l_image', 'Savoureuse pizza aux quatre viandes')
    ];
  }

  selectPizza(pizza: Pizza): void {
    this.pizzaSelected.emit(pizza);
  }
}