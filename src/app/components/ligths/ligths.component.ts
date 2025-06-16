import {Component, computed, inject} from '@angular/core';
import {PrincipalComponent} from "./principal/principal.component";
import {LIGHTS_TYPE} from "../../interfaces/interfaces";
import {SmallComponent} from "./small/small.component";
import {LineComponent} from "./line/line.component";
import {PokedexStatusService} from "../../services/pokedex-status.service";

@Component({
    selector: 'app-ligths',
    imports: [
        PrincipalComponent,
        SmallComponent,
        LineComponent,
    ],
    templateUrl: './ligths.component.html',
    styleUrl: './ligths.component.scss'
})
export class LigthsComponent {
    readonly #pokedex = inject(PokedexStatusService);
    readonly lightsTypes = LIGHTS_TYPE;
    
    light_status = computed(
        () => this.#pokedex.light_status()
    )
    
}
