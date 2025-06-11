import {Component} from '@angular/core';
import {ButtonRoundedBigComponent} from "../../buttons/button-rounded-big/button-rounded-big.component";
import {
    ButtonRectangularSmallComponent
} from "../../buttons/button-rectangular-small/button-rectangular-small.component";
import {buttonColors} from "../../../interfaces/interfaces";
import {ButtonRectangularBigComponent} from "../../buttons/button-rectangular-big/button-rectangular-big.component";
import {JoystickComponent} from "../../buttons/joystick/joystick.component";

@Component({
    selector: 'app-buttons-container',
    imports: [
        ButtonRoundedBigComponent,
        ButtonRectangularSmallComponent,
        ButtonRectangularBigComponent,
        JoystickComponent
    ],
    templateUrl: './buttons-container.component.html',
    styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
    buttonColors = buttonColors;
}
