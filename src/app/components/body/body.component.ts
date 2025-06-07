import {Component} from '@angular/core';
import {FrameComponent} from "./frame/frame.component";
import {DisplayFrameComponent} from "./display-frame/display-frame.component";
import {ButtonsContainerComponent} from "./buttons-container/buttons-container.component";

@Component({
    selector: 'app-body',
    imports: [
        FrameComponent,
        DisplayFrameComponent,
        ButtonsContainerComponent
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent {

}
