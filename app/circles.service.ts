import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
    static parameters = ['canvasWidth', 'canvasHeight']
    
    constructor(canvasWidth: Number, canvasHeight: Number) {
        this.circles = [];
  
        for (let i = 0; i < 100; i++) {
            this.circles.push({
                x: this.randInt(canvasWidth), 
                y: this.randInt(canvasHeight), 
                radius: this.randInt(80) + 10,
                xMove: this.randInt(5) - 2, // -2..2
                yMove: this.randInt(5) - 2  // -2..2
            });
        }
    }
    
    update() {
        for (const circle of this.circles) {
            circle.x += circle.xMove;
            circle.y += circle.yMove;
        }
    }
    
    randInt(max: Number): Number {
        return Math.floor(Math.random() * max);
    }
}