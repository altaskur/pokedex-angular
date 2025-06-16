import {Component, input} from '@angular/core';

@Component({
    selector: 'app-display',
    standalone: true,
    imports: [],
    templateUrl: './display.component.html',
    styleUrl: './display.component.scss'
})
export class DisplayComponent {
    light_status = input.required<boolean>();
}
