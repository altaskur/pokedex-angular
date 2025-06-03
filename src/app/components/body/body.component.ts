import {Component} from '@angular/core';
import {FrameComponent} from "./frame/frame.component";
import {DisplayFrameComponent} from "./display-frame/display-frame.component";

@Component({
    selector: 'app-body',
    imports: [
        FrameComponent,
        DisplayFrameComponent
    ],
    templateUrl: './body.component.html',
    styleUrl: './body.component.scss'
})
export class BodyComponent {

}
