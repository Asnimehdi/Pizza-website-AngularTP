import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Pizza } from '../shared/pizza.model';
@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  public pizzas: Pizza[] = [];
@Output() 
pizzaSelected = new EventEmitter<Pizza>();
ngOnInit(): void {
    this.pizzas=[new Pizza('Pizza 4 Fromages','pizza.jpg','Une délicieuse pizza généreusement garnie avec un mélange savoureux de quatre fromages différents. Laissez-vous séduire par la fusion de saveurs qui ravira vos papilles.'),
                 new Pizza('Pizza 4 Viandes','pizza2.jpg',' Une pizza copieuse composée d un assortiment de quatre viandes succulentesChaque bouchée est une explosion de goûts carnés qui comblera les amateurs de viande.'),
                 new Pizza('Pizza Brésilienne','pizza3.jpg','Une pizza exotique inspirée des saveurs vibrantes du Brésil. Dégustez une combinaison unique d ingrédients colorés et de sauces épicées qui évoquent l ambiance ensoleillée du pays.'),
                 new Pizza('Pizza Orientale','pizza4.jpg',' Plongez dans l expérience culinaire de l Orient avec cette pizza aux saveurs riches et épicées. Les ingrédients authentiques et les épices exotiques vous transportent dans un voyage gustatif unique.')
                ];
              }
  selectPizza(pizza : Pizza):void {
    console.log('Pizza sélectionnée :', pizza);
    this.pizzaSelected.emit(pizza);
  }        


}

