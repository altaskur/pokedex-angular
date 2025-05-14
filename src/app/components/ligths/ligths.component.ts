import {Component} from '@angular/core';
import {PrincipalComponent} from "./principal/principal.component";
import {LIGHTS_TYPE} from "../../interfaces/interfaces";
import {SmallComponent} from "./small/small.component";

@Component({
    selector: 'app-ligths',
    imports: [
        PrincipalComponent,
        SmallComponent,
    ],
    templateUrl: './ligths.component.html',
    styleUrl: './ligths.component.scss'
})
export class LigthsComponent {
    readonly lightsTypes = LIGHTS_TYPE;
    
    light_status = false
    
    handleStatus() {
        this.light_status = !this.light_status;
    }
}
