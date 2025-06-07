import {Component} from '@angular/core';
import {DisplayComponent} from "./display/display.component";
import {SpeakerComponent} from "./speaker/speaker.component";
import {ButtonRoundedSmallComponent} from "../../buttons/button-rounded-small/button-rounded-small.component";

@Component({
    selector: 'app-display-frame',
    imports: [
        DisplayComponent,
        SpeakerComponent,
        ButtonRoundedSmallComponent
    ],
    templateUrl: './display-frame.component.html',
    styleUrl: './display-frame.component.scss'
})
export class DisplayFrameComponent {

}
