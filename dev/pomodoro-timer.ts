import { Component} from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'pomodoro-timer',
    template: `<h1> {{minutes}} : {{seconds}} </h1>
                    <p>
                        <button (click)="togglePause()">
                            {{buttonLabel}}
                        </button>
                    </p>`
})

export class PomodoroTimerComponent {
    minutes: number;
    seconds: number;
    ispaused: boolean;
    buttonLabel: String;

    constructor() {
        this.resetPomodoro();
        setInterval(()=> this.tick(), 1000);
    }

   private tick(): void {
       if(!this.ispaused) {
        if (--this.seconds < 0) {
            this.seconds = 59;

            if (--this.minutes < 0) {
                this.minutes = 24;
                this.seconds = 59;
            }
        }
    }
   }

    resetPomodoro(): void {
        this.minutes = 24;
        this.seconds = 59;
        this.buttonLabel = "Start";
        this.ispaused = true;
    }

    togglePause(): void {
        this.ispaused = !this.ispaused;
        this.buttonLabel = this.ispaused ? "Start" : "Pause";
    }
}

bootstrap(PomodoroTimerComponent);