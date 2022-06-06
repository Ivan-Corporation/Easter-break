"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.easterBreaker = void 0;
const matter_js_1 = require("matter-js");
const Renderer_1 = __importDefault(require("./Renderer"));
const utils = __importStar(require("./utils"));
let canvas = document.createElement("canvas");
canvas.style.width = "100vw";
canvas.style.height = "100vh";
canvas.style.position = "fixed";
canvas.style.zIndex = "100000000000";
canvas.style.top = "0";
canvas.style.right = "0";
let ctx = canvas.getContext("2d");
(_a = document.getElementById("ctrl")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => {
    (0, exports.easterBreaker)();
});
const easterBreaker = async () => {
    var _a, _b;
    if (!ctx) {
        throw new Error("canvas context is not supported ");
    }
    const width = Math.ceil(window.innerWidth / 30) * 30;
    const height = Math.ceil(window.innerHeight / 30) * 30;
    canvas.width = width;
    canvas.height = height;
    (_a = document.body) === null || _a === void 0 ? void 0 : _a.appendChild(canvas);
    let _image = await utils.getScreenshot();
    let image = document.createElement("canvas");
    image.width = width;
    image.height = height;
    let relative_height = Math.ceil(_image.height * width / _image.width);
    // crop top
    (_b = image.getContext("2d")) === null || _b === void 0 ? void 0 : _b.drawImage(_image, 0, 0, width, relative_height);
    let { engine, rows, columns } = utils.createStackEngine(width, height);
    let slots = [];
    let bodies = engine.world.composites[0].bodies;
    for (let row = 0; row < rows; row++) {
        let slotRow = [];
        slots.push(slotRow);
        for (let column = 0; column < columns; column++) {
            slotRow.push(bodies[row * columns + column]);
        }
    }
    const renderer = new Renderer_1.default({
        slots,
        canvas,
        image,
        options: {},
    });
    renderer.run();
    // create runner
    var runner = matter_js_1.Runner.create();
    matter_js_1.Runner.run(runner, engine);
    // add mouse control
    let mouse = matter_js_1.Mouse.create(canvas);
    let mouseConstraint = matter_js_1.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: true,
            },
        },
    });
    matter_js_1.Composite.add(engine.world, mouseConstraint);
};
exports.easterBreaker = easterBreaker;
exports.default = exports.easterBreaker;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUFzRTtBQUN0RSwwREFBa0M7QUFDbEMsK0NBQWlDO0FBRWpDLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDOUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO0FBQzdCLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztBQUU5QixNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUM7QUFDaEMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsY0FBYyxDQUFDO0FBQ3JDLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7QUFFekIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVsQyxNQUFBLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLDBDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUU7SUFFOUQsSUFBQSxxQkFBYSxHQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFDLENBQUM7QUFFSSxNQUFNLGFBQWEsR0FBRyxLQUFLLElBQUksRUFBRTs7SUFFdEMsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE1BQU0sSUFBSSxLQUFLLENBQUMsa0NBQWtDLENBQUMsQ0FBQztLQUNyRDtJQUVELE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDckQsTUFBTSxN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