import {Injectable, signal} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PokedexStatusService {
    light_status = signal<boolean>(false);
    
    switchPokedex() {
        this.light_status.update((status) => !status);
    }
}
