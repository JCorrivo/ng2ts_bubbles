import {Component, Input} from 'angular2/core';
import {Circle} from './circles.service';

@Component({
    selector: '[my-circle]',
	template: `
		<svg:circle [attr.cx]="circle.x" 
                    [attr.cy]="circle.y" 
                    [attr.r]="circle.radius"
                    [attr.fill]="circle.color"
                    [style]="getStyle()" />
	`
})
export class CircleComponent {
    @Input() circle: Circle;
    
    getStyle() {
        return this.circle.visible ? '' : 'display: none;';
    }
}