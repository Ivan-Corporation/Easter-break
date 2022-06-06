interface Config {
    canvas: HTMLCanvasElement;
    image: HTMLCanvasElement;
    slots: Matter.Body[][];
    options: {};
}
export default class Renderer {
    private config;
    slotSize: number;
    constructor(config: Config);
    run(): void;
    imageSliceBank: {
        [key: string]: HTMLCanvasElement;
    };
    getImageSlice(row: number, column: number): HTMLCanvasElement;
    forEverySlot(callback: (slot: Matter.Body, location: {
        row: number;
        column: number;
    }) => void): void;
    render(): void;
}
export {};
