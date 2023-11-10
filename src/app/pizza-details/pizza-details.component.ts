import { Component,OnInit,Input } from '@angular/core';
import { Pizza } from '../shared/pizza.model';
@Component({
  selector: 'app-pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent {


  @Input()
  pizza!: Pizza; //Indiques au compilateur qu'il peut faire confiance à l'initialisation de la propriété pizza à un moment ultérieur
}
