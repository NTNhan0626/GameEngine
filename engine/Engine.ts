export class Engine {
    private static canvas: HTMLCanvasElement;
    private static ctx: CanvasRenderingContext2D;
    private static scene: { onLoad(dt: number): void };
    private static lastTime = 0;

    static start(scene: { onLoad(dt: number): void }) {
        this.scene = scene;

        this.canvas = document.createElement('canvas');
        this.canvas.width = 400;
        this.canvas.height = 400;
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d')!;

        this.canvas.addEventListener('click', (e) => {
            const rect = this.canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            (scene as any).onClick?.(x, y);
        });

        requestAnimationFrame(this.Gameloop.bind(this));
    }

    private static Gameloop(time: number) {
        const dt = (time - this.lastTime) / 1000;
        this.lastTime = time;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.scene.onLoad(dt);

        requestAnimationFrame(this.Gameloop.bind(this));
    }

    static getContext() {
        return this.ctx;
    }
}
