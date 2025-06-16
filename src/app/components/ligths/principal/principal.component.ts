import {Component, input} from '@angular/core';

@Component({
    selector: 'app-principal-light',
    imports: [],
    templateUrl: './principal.component.html',
    styleUrl: './principal.component.scss'
})
export class PrincipalComponent {
    light_status = input.required<boolean>();
}
