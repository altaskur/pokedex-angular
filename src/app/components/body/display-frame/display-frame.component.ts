import {Component, computed, inject} from '@angular/core';
import {DisplayComponent} from "./display/display.component";
import {SpeakerComponent} from "./speaker/speaker.component";
import {ButtonRoundedSmallComponent} from "../../buttons/button-rounded-small/button-rounded-small.component";
import {PokedexStatusService} from "../../../services/pokedex-status.service";

@Component({
    selector: 'app-display-frame',
    standalone: true,
    imports: [
        DisplayComponent,
        SpeakerComponent,
        ButtonRoundedSmallComponent
    ],
    templateUrl: './display-frame.component.html',
    styleUrl: './display-frame.component.scss'
})
export class DisplayFrameComponent {
    readonly #pokedex = inject(PokedexStatusService);
    
    light_status = computed(
        () => this.#pokedex.light_status()
    )
    
    handleClick() {
        this.#pokedex.switchPokedex()
    }
}
