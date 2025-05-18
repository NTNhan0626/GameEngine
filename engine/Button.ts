import { Node } from './Node';

export class Button extends Node {
    text: string;
    callback: () => void;

    constructor(x: number, y: number, width: number, height: number, text: string, callback: () => void) {
        super(x, y, width, height);
        this.text = text;
        this.callback = callback;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#2c3e50';
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = '#ecf0f1';
        ctx.font = '16px Arial';
        ctx.fillText(this.text, this.x + 10, this.y + this.height / 2 + 5);
    }

    checkClick(mouseX: number, mouseY: number) {
        if (
            mouseX >= this.x && mouseX <= this.x + this.width &&
            mouseY >= this.y && mouseY <= this.y + this.height
        ) {
            this.callback();
        }
    }
}
