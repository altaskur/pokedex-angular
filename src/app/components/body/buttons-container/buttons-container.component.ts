import {Component} from '@angular/core';
import {ButtonRoundedBigComponent} from "../../buttons/button-rounded-big/button-rounded-big.component";
import {
  ButtonRectangularSmallComponent
} from "../../buttons/button-rectangular-small/button-rectangular-small.component";
import {buttonColors} from "../../../interfaces/interfaces";

@Component({
    selector: 'app-buttons-container',
    imports: [
        ButtonRoundedBigComponent,
        ButtonRectangularSmallComponent
    ],
    templateUrl: './buttons-container.component.html',
    styleUrl: './buttons-container.component.scss'
})
export class ButtonsContainerComponent {
    
    
    buttonColors = buttonColors;
}
