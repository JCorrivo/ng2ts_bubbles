import {Component} from 'angular2/core';

@Component({
    selector: '[my-circle]',
	inputs: ['circle'],
	template: `
		<svg:circle [attr.cx]="circle.x" 
                    [attr.cy]="circle.y" 
                    [attr.r]="circle.radius"
                    [attr.fill]="circle.color"
                    [style]="getStyle()" />
	`
})
export class CircleComponent {
    getStyle() {
        return this.circle.visible ? '' : 'display: none;';
    }
}