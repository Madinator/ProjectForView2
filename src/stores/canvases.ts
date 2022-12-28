import { defineStore } from 'pinia';

interface CanvasObject {
    image: HTMLImageElement | null;
    canvas: HTMLCanvasElement | null;
    ctx: CanvasRenderingContext2D | null;
    x: number;
    y: number;
    width: number;
    height: number;
    x2: number;
    y2: number;
    width2: number;
    height2: number;
}

interface State {
    canvasBackgroundParticles: CanvasObject;
}

export const useCanvasesStore = defineStore({
    id: 'canvasesStore',

    state: (): State => ({
        canvasBackgroundParticles: {
            image: null,
            canvas: null,
            ctx: null,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            x2: 0,
            y2: 0,
            width2: 0,
            height2: 0,
        }
    }),

    actions: {
        drawCanvasBackgroundParticles(): void {
            if (!this.$state.canvasBackgroundParticles.image ||
                !this.$state.canvasBackgroundParticles.ctx) return;

            this.$state.canvasBackgroundParticles.ctx.clearRect(
                0,
                0, 
                this.$state.canvasBackgroundParticles.width, 
                this.$state.canvasBackgroundParticles.height
            );

            // console.log(
            //     this.$state.canvasBackgroundParticles.ctx,
            //     this.$state.canvasBackgroundParticles.image,
            //     this.$state.canvasBackgroundParticles.x,
            //     this.$state.canvasBackgroundParticles.y, 
            //     this.$state.canvasBackgroundParticles.width, 
            //     this.$state.canvasBackgroundParticles.height
            // )

            this.$state.canvasBackgroundParticles.ctx.drawImage(
                this.$state.canvasBackgroundParticles.image,
                this.$state.canvasBackgroundParticles.x,
                this.$state.canvasBackgroundParticles.y, 
                this.$state.canvasBackgroundParticles.width, 
                this.$state.canvasBackgroundParticles.height,
                // this.$state.canvasBackgroundParticles.x2,
                // this.$state.canvasBackgroundParticles.y2, 
                // this.$state.canvasBackgroundParticles.width2, 
                // this.$state.canvasBackgroundParticles.height2
            );
        }
    }
})