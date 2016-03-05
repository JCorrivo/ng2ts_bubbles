import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
	directives: [CircleComponent],
    providers: [Circles],    
    template: `
<svg viewBox="0 0 900 300" preserveAspectRatio="xMidYMid meet">
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
    
    function getViewBox(): l_context {
        return `0 0 ${this.width} ${this.height}`;
    }
}