import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
    static parameters = ['canvasWidth', 'canvasHeight']
    
    constructor(canvasWidth: Number, canvasHeight: Number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        
        this.circles = [];
  
        for (let i = 0; i < 100; i++) {
            this.circles.push({
                x: this.randInt(canvasWidth), 
                y: this.randInt(canvasHeight), 
                radius: this.randInt(80) + 10,
                xMove: this.randInt(5) - 2, // from -2 to 2
                yMove: this.randInt(5) - 2  // from -2 to 2
            });
        }
    }
    
    update() {
        for (const circle of this.circles) {
            this.moveCircle(circle);
        }
    }
    
    moveCircle (circle){
        circle.x += circle.xMove;
        circle.y += circle.yMove;
    
        if (circle.x > (this.canvasWidth + circle.radius)) {
            circle.x = 0 - circle.radius;
        }
        
        if (circle.x < (0 - circle.radius)) {
          circle.x = this.canvasWidth + circle.radius;
        }
        
        if (circle.y > (this.canvasHeight + circle.radius)) {
          circle.y = 0 - circle.radius;
        }
        
        if (circle.y < (0 - circle.radius)) {
          circle.y = this.canvasHeight + circle.radius;
        }
    }
    
    randInt(max: Number): Number {
        return Math.floor(Math.random() * max);
    }
}