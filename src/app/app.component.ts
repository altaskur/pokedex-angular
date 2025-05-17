import {Component} from '@angular/core';
import {PokedexComponent} from "./components/pokedex/pokedex.component";

@Component({
    selector: 'app-root',
    imports: [PokedexComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
    title = 'pokedex';
}
