import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
    static parameters = ['canvasWidth', 'canvasHeight']
    
    constructor(canvasWidth: Number, canvasHeight: Number) {
        this.circles = [];
  
        for (let i = 0; i < 100; i++) {
            this.circles.push({
                x: randInt(canvasWidth), 
                y: randInt(canvasHeight), 
                radius: randInt(80) + 10 
            });
        }
    }
    
    function randInt(max: Number): Number {
        return Math.floor(Math.random() * max);
    }
}