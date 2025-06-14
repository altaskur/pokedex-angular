import {Component, input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {TrianglePosition} from "../../../interfaces/interfaces";

@Component({
    selector: 'app-triangle-icon',
    imports: [CommonModule],
    templateUrl: './triangle-icon.component.html',
    styleUrl: './triangle-icon.component.scss'
})
export class TriangleIconComponent {
    position = input.required<TrianglePosition>();
}
