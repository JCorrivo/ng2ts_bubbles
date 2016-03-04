import {Component} from 'angular2/core';

@Component({
	selector: '[my-circle]',
	inputs: ['circle'],
	template: `
		<svg:circle [attr.cx]="circle.x" [attr.cy]="circle.y" [attr.r]="circle.radius" />
	`
})
export class CircleComponent {}