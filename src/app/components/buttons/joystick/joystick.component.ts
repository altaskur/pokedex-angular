import {Component} from '@angular/core';
import {TriangleIconComponent} from "../../icons/triangle-icon/triangle-icon.component";
import {CircleIconComponent} from "../../icons/circle-icon/circle-icon.component";
import {TrianglePosition} from "../../../interfaces/interfaces";

@Component({
    selector: 'app-joystick',
    imports: [
        TriangleIconComponent,
        CircleIconComponent
    ],
    templateUrl: './joystick.component.html',
    styleUrl: './joystick.component.scss'
})
export class JoystickComponent {
    trianglePosition = TrianglePosition;
}
