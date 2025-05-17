import {Component} from '@angular/core';
import {LigthsComponent} from "../ligths/ligths.component";

@Component({
    
    selector: 'app-pokedex',
    imports: [
        LigthsComponent
    ],
    templateUrl: './pokedex.component.html',
    styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

}
