import {Component} from '@angular/core';
import {DisplayComponent} from "./display/display.component";
import {ButtonComponent} from "./button/button.component";
import {SpeakerComponent} from "./speaker/speaker.component";

@Component({
    selector: 'app-display-frame',
    imports: [
        DisplayComponent,
        ButtonComponent,
        SpeakerComponent
    ],
    templateUrl: './display-frame.component.html',
    styleUrl: './display-frame.component.scss'
})
export class DisplayFrameComponent {

}
