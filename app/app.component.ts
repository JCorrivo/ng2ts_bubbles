import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';
import {Circles} from './circles.service';

@Component({
    selector: 'my-app',
    styleUrls: ['./app/app.component.css'],
	directives: [CircleComponent],
    providers: [Circles],    
    template: `
		<svg viewBox="0 0 900 200" preserveAspectRatio="xMidYMid meet">
			<svg:g my-circle *ngFor="#circle of circles.circles" [circle]="circle" />
		</svg>
	`
})
export class AppComponent{
    private circles: Circles;
    
    constructor(circles: Circles) {
        this.circles = circles;
    }
}