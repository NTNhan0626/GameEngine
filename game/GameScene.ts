import { Button } from "../engine/Button";
import { Engine } from "../engine/Engine";
import { Sprite } from "../engine/Sprite";

export class GameScene {
    player: Sprite;
    buttons: Button[] = [];

    isMove: boolean = false;
    movedDistance: number = 0;
    moveSpeed: number = 100; 
    moveTarget: number = 40; 
    moveDir: { dx: number; dy: number } = { dx: 0, dy: 0 };

    constructor() {
        this.player = new Sprite(100, 100, 60, 60, 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png');
        this.buttons = [
            new Button(160, 280, 80, 30, "Lên", () => this.startMove(0, -1)),
            new Button(160, 360, 80, 30, "Xuống", () => this.startMove(0, 1)),
            new Button(70, 320, 80, 30, "<- Trái", () => this.startMove(-1, 0)),
            new Button(250, 320, 80, 30, "-> Phải", () => this.startMove(1, 0)),
        ];
    }
    startMove(dx: number, dy: number) {
        if (!this.isMove) {
            this.isMove = true;
            this.movedDistance = 0;
            this.moveDir = { dx, dy };
        }
    }
    onLoad(dt: number) {
        const ctx = Engine.getContext();

        if (this.isMove) {
            const moveThisFrame = this.moveSpeed * dt;

            this.player.move(
                this.moveDir.dx * moveThisFrame,
                this.moveDir.dy * moveThisFrame
            );

            this.movedDistance += moveThisFrame;

            if (this.movedDistance >= this.moveTarget) {                
                this.isMove = false;
                this.movedDistance = 0;
            }
        }
        this.player.draw(ctx);
        this.buttons.forEach(btn => btn.draw(ctx));
    }
    onClick(x: number, y: number) {
        this.buttons.forEach(btn => btn.checkClick(x, y));
    }
}
