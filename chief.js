class Chief{
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });

        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/MasterChief.png");
        this.background = ASSET_MANAGER.getAsset("./sprites/background.png");

        this.facing = 0; // 0 = right, 1 = left, 2 = down, 3 = up
        this.steps = 0;
        this.animations = [];
        this.loadAnimations();
        //this.animation = new Animator(this.spritesheet, 80, 205, 30, 50, 8, 0.15, 34, false, true);

        //this.loadAnimations(spritesheet);
    }

    loadAnimations() {
        for (var i = 0; i < 4; i++) { // 4 directions
            this.animations.push([]);
        }
       // constructor(spritesheet, xStart, yStart, width, height, frameCount, frameDuration, framePadding, reverse, loop)
        // walking right
        this.animations[0] = new Animator(this.spritesheet, 115, 9, 41, 60, 9, 3, 8, false, true);

        // Just in case more directions, currently only right is available
        this.animations[1] = new Animator(this.spritesheet, 0, 0, 0, 0, 0, 0, 0, false, true);
        this.animations[2] = new Animator(this.spritesheet, 0, 0, 0, 0, 0, 0, 0, false, true);
        this.animations[3] = new Animator(this.spritesheet, 0, 0, 0, 0, 0, 0, 0, false, true);

    }

    update() {

    }

    draw(ctx) {
        ctx.drawImage(this.background, 0, 0, 288 * 3.6, 160 * 3.6);

        this.animations[this.facing].drawFrame(this.game.clockTick, ctx, -100  + this.steps * 2, 300, 4);
        this.steps++;
        if (this.steps === 550) {
            this.steps = 0;
        }
    }
}