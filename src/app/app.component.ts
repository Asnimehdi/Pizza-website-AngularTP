import { Component } from '@angular/core';
import { Pizza } from './shared/pizza.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pizzaTp';
  pizzas: Pizza[] = [];

  onPizzaSelected(pizza: Pizza): void {
    console.log('Pizza sélectionnée :', pizza);
    // La logique que tu veux exécuter lorsque la pizza est sélectionnée
  }
}
