import {Component, effect, inject} from '@angular/core';
import {PokedexStatusService} from "../../../../services/pokedex-status.service";

@Component({
    selector: 'app-speaker',
    imports: [],
    templateUrl: './speaker.component.html',
    styleUrl: './speaker.component.scss'
})
export class SpeakerComponent {
    readonly #pokedex = inject(PokedexStatusService);
    
    audioContext?: AudioContext;
    now?: CSSNumberish;
    
    constructor() {
        
        
        effect(() => {
            if (this.#pokedex.light_status()) {
                this.playPokedexTurnOnSound();
            }
        });
    }
    
    
    playNote(freq: number, start: CSSNumberish, duration = 0.12, volume = 0.3) {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gain = this.audioContext.createGain();
        
        oscillator.type = 'square';
        oscillator.frequency.value = freq;
        gain.gain.setValueAtTime(volume, Number(start));
        gain.gain.exponentialRampToValueAtTime(0.001, Number(start) + duration);
        oscillator.connect(gain).connect(this.audioContext.destination);
        oscillator.start(Number(start));
        oscillator.stop(Number(start) + duration);
    }
    
    
    playPokedexTurnOnSound() {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        this.audioContext = new AudioCtx();
        this.now = this.audioContext?.currentTime;
        
        const start = Number(this.now);
        
        this.playNote(1046, start); // C6
        this.playNote(1318.5, start + 0.12); // E6
        this.playNote(1568, start + 0.24); // G6
        
        // Descenso digital (chirp)
        const chirp = this.audioContext.createOscillator();
        const chirpGain = this.audioContext.createGain();
        chirp.type = 'square';
        chirp.frequency.setValueAtTime(1500, start + 0.4);
        chirp.frequency.exponentialRampToValueAtTime(400, start + 0.65);
        chirpGain.gain.setValueAtTime(0.2, start + 0.4);
        chirpGain.gain.exponentialRampToValueAtTime(0.001, start + 0.65);
        chirp.connect(chirpGain).connect(this.audioContext.destination);
        chirp.start(start + 0.4);
        chirp.stop(start + 0.65);
        
    }
}
