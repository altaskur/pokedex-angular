import {Component, input} from '@angular/core';
import {buttonColors} from "../../../interfaces/interfaces";
import {CommonModule} from "@angular/common";

@Component({
    selector: 'app-button-rectangular-big',
    imports: [CommonModule],
    templateUrl: './button-rectangular-big.component.html',
    styleUrl: './button-rectangular-big.component.scss'
})
export class ButtonRectangularBigComponent {
    color = input.required<buttonColors>();
}
