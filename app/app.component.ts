import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
	directives: [CircleComponent],
    providers: [Circles],    
    template: `
        <svg [attr.viewBox]="getViewBox()" 
          preserveAspectRatio="xMidYMid meet" 
          (click)="toggleRunning()">
			<svg:g my-circle *ngFor="#circle of circles.circles" [circle]="circle" />
		</svg>
	`
})
export class AppComponent{
    static parameters = [Circles, 'canvasWidth', 'canvasHeight'];
    
    constructor(circles: Circles, canvasWidth: Number, canvasHeight: Number) {
        this.circles = circles;
        this.width = canvasWidth;
        this.height = canvasHeight;
    }

    ngOnInit() {
        this.running = true;
        this.animationFrame();
    }

    ngOnDestroy() {
        this.running = false;
    }
    
    toggleRunning() {
        this.running = !this.running;
        
        if (this.running) {
            this.animationFrame();
        }
    }
    
    animationFrame() {
        this.circles.update();
        
        if (this.running) {
            requestAnimationFrame(() => this.animationFrame());
        }
    }
    
    getViewBox(): String {
        return `0 0 ${this.width} ${this.height}`;
    }
}