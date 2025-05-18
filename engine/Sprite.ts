import { Node } from './Node';

export class Sprite extends Node {
    image: HTMLImageElement;

    constructor(x: number, y: number, width: number, height: number, imageSrc: string) {
        super(x, y, width, height);
        this.image = new Image();
        this.image.src = imageSrc;
    }       

    draw(ctx: CanvasRenderingContext2D) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}
