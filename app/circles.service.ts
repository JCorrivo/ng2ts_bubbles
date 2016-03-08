import {Injectable} from 'angular2/core';

@Injectable()
export class Circles {
    private canvasWidth: number;
    private canvasHeight: number;
    
    private sourceCircles: Circle[] = [];
    private circles: Circle[] = [];
    private pairs: any;
    private circleMap: any = new Map();
    
    static parameters = ['canvasWidth', 'canvasHeight']
    constructor(canvasWidth: number, canvasHeight: number) {
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
       
        let c: Circle;
       
        for (let i = 0; i < 100; i++) {
            c = <Circle> {
                x: this.randInt(canvasWidth), 
                y: this.randInt(canvasHeight), 
                radius: this.randInt(80) + 10,
                xMove: this.randInt(5) - 2, // from -2 to 2
                yMove: this.randInt(5) - 2  // from -2 to 2
            };
            
            this.sourceCircles.push(c);
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
        
        for (const pair of this.pairs) {
            const [left, right] = pair;
            const dist = this.distance(left, right);
            const overlap = dist - left.radius - right.radius;
            
            if (overlap < 0) {
                // midpoint = average of the two coordinates
                const midX = (left.x + right.x) / 2;
                const midY = (left.y + right.y) / 2;
                const radius = -overlap / 2;
                let collisionCircle = this.circleMap.get(pair);
                               
                if (collisionCircle) {
                    collisionCircle.x = midX;
                    collisionCircle.y = midY;
                    collisionCircle.radius = radius;
                } else {
                    collisionCircle = {x: midX, y: midY, radius};
                    this.circles.push(collisionCircle);
                    this.circleMap.set(pair, collisionCircle);
                }
                
                if (!collisionCircle.visible) {
                    collisionCircle.visible = true;
                    const red = Math.floor(this.randInt(256));
                    const green = Math.floor(this.randInt(256));
                    const blue = Math.floor(this.randInt(256));
                    collisionCircle.color = `rgba(${red}, ${green}, ${blue}, 0.5)`;
                }
            } else if (this.circleMap.has(pair)) {
                this.circleMap.get(pair).visible = false;
            }
        }
    }
    
    moveCircle (circle: Circle){
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
    
    distance(circle1: Circle, circle2: Circle) {
        return Math.sqrt(
            (circle2.x - circle1.x) ** 2 +
            (circle2.y - circle1.y) ** 2
        );
    }
    
    randInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}

export interface Circle {
    x: number;
    y: number;
    radius: number;
    color: string;
    xMove: number;
    yMove: number;
    visible: boolean;
}