import {Component} from 'angular2/core';

@Component({
	selector: 'my-app',
	template: `
		<svg viewBox="0 0 900 500" preserveAspectRatio="xMidYMid meet">
                    <svg:circle *ngFor="#circle of circles"
                        [attr.cx]="circle.x"
                        [attr.cy]="circle.y"
                        [attr.r]="circle.radius" />
                   </svg>
	`
})
export class AppComponent {
	circles = [
		{x: 50, y: 50, radius: 10},
		{x: 75, y: 75, radius: 20},
		{x: 115, y: 115, radius: 30}
	];
}