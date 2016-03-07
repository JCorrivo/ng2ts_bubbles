import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
    private canvasWidth: number;
    private canvasHeight: number;
    
    private sourceCircles: any = [];
    private circles: any;
    private pairs: any;
    
    static parameters = ['canvasWidth', 'canvasHeight']
    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
      
        for (let i = 0; i < 100; i++) {
            this.sourceCircles.push({
                x: this.randInt(canvasWidth), 
                y: this.randInt(canvasHeight), 
                radius: this.randInt(80) + 10,
                xMove: this.randInt(5) - 2, // from -2 to 2
                yMove: this.randInt(5) - 2  // from -2 to 2
            });
        }
        
        this.pairs = [];
        for (let i = 0 ; i < this.sourceCircles.length - 1 ; i++) {
            for (let j = i ; j < this.sourceCircles.length - 1 ; j++) {
                this.pairs.push([this.sourceCircles[i], this.sourceCircles[j + 1]]);
            }
        }
    }
    
    update() {
        for (const circle of this.sourceCircles) {
            this.moveCircle(circle);
        }
        
        this.circles = [];
        for (const [left, right] of this.pairs) {
            const dist = this.distance(left, right);
            const overlap = dist - left.radius - right.radius;
            
            if (overlap < 0) {
                // midpoint = average of the two coordinates
                const midX = (left.x + right.x) / 2;
                const midY = (left.y + right.y) / 2;
                const collisionCircle = {x: midX, y: midY, radius: -overlap / 2};
                this.circles.push(collisionCircle);
            }
        }
    }
    
    moveCircle (circle: any){
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
    
    distance(circle1: any, circle2: any) {
        return Math.sqrt(
            (circle2.x - circle1.x) ** 2 +
            (circle2.y - circle1.y) ** 2
        );
    }
    
    randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}