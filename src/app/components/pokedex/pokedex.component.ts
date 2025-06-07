import {Component} from '@angular/core';
import {LigthsComponent} from "../ligths/ligths.component";
import {BodyComponent} from "../body/body.component";

@Component({
    
    selector: 'app-pokedex',
    imports: [
        LigthsComponent,
        BodyComponent
    ],
    templateUrl: './pokedex.component.html',
    styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {

}
