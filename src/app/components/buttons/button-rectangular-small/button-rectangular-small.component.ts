import {Component, input} from '@angular/core';
import {buttonColors} from "../../../interfaces/interfaces";
import {CommonModule} from "@angular/common";


@Component({
    selector: 'app-button-rectangular-small',
    imports: [CommonModule],
    templateUrl: './button-rectangular-small.component.html',
    styleUrl: './button-rectangular-small.component.scss'
})
export class ButtonRectangularSmallComponent {
    color = input.required<buttonColors>();
}
