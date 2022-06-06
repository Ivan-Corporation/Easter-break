import { Engine } from "matter-js";
export declare const getScreenshot: () => Promise<HTMLCanvasElement>;
export declare const createStackEngine: (width: number, height: number) => {
    rows: number;
    engine: Engine;
    columns: number;
};
