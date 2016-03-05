import {Component} from 'angular2/core';
import {CircleComponent} from './circle.component';

@Component({
    selector: 'my-app',
	directives: [CircleComponent],
    styleUrls: ['./app/app.component.css'],
    template: `
		<svg viewBox="0 0 900 200" preserveAspectRatio="xMidYMid meet">
			<svg:g my-circle *ngFor="#circle of circles" [circle]="circle" />
		</svg>
	`
})
export class AppComponent{
  	circles = [
        {x: 50, y: 50, radius: 10},
        {x: 75, y: 75, radius: 20},
        {x: 115, y: 115, radius: 30}
    ];   
}