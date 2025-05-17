import {Component, input} from '@angular/core';
import {LIGHTS_TYPE} from "../../../interfaces/interfaces";

@Component({
    selector: 'app-small-lights',
    imports: [],
    templateUrl: './small.component.html',
    styleUrl: './small.component.scss'
})
export class SmallComponent {
    readonly lightsTypes = LIGHTS_TYPE;
    
    light_type = input.required<LIGHTS_TYPE>();
    light_status = input(false);
}
