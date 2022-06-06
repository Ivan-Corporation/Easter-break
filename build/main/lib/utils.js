"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStackEngine = exports.getScreenshot = void 0;
const html2canvas_1 = __importDefault(require("html2canvas"));
const matter_js_1 = require("matter-js");
const getScreenshot = async () => {
    return await (0, html2canvas_1.default)(document.body, {
        allowTaint: true,
        y: window.scrollY,
        x: window.scrollX,
        height: window.innerHeight,
        width: window.innerWidth,
    });
};
exports.getScreenshot = getScreenshot;
const createStackEngine = (width, height) => {
    let engine = matter_js_1.Engine.create();
    engine.gravity.y = 0.05;
    let world = engine.world;
    let WALL_THICKNESS = 50;
    let UNIT_SIZE = 40;
    let columns = Math.ceil(width / UNIT_SIZE);
    let rows = Math.ceil(height / UNIT_SIZE);
    var stack = matter_js_1.Composites.stack(0, 0, columns, rows, 0, 0, (x, y) => {
        let rectangle = matter_js_1.Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
        rectangle.restitution = 0;
        rectangle.density = 0;
        return rectangle;
    });
    matter_js_1.Composite.add(world, [
        stack,
        matter_js_1.Bodies.rectangle(width / 2, height + WALL_THICKNESS / 2, width, WALL_THICKNESS, { isStatic: true }),
    ]);
    return {
        rows,
        engine,
        columns,
    };
};
exports.createStackEngine = createStackEngine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL3V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLDhEQUFzQztBQUN0Qyx5Q0FBa0U7QUFFM0QsTUFBTSxhQUFhLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDdEMsT0FBTyxNQUFNLElBQUEscUJBQVcsRUFBQyxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3RDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTztRQUNqQixDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU87UUFDakIsTUFBTSxFQUFFLE1BQU0sQ0FBQyxXQUFXO1FBQzFCLEtBQUssRUFBRSxNQUFNLENBQUMsVUFBVTtLQUN6QixDQUFDLENBQUM7QUFDTCxDQUFDLENBQUM7QUFSVyxRQUFBLGFBQWEsaUJBUXhCO0FBRUssTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEtBQWEsRUFBRSxNQUFjLEVBQUUsRUFBRTtJQUNqRSxJQUFJLE1BQU0sR0FBRyxrQkFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQzdCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztJQUV4QixJQUFJLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBRXpCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUN4QixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFFbkIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFDM0MsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDLENBQUM7SUFFekMsSUFBSSxLQUFLLEdBQUcsc0JBQVUsQ0FBQyxLQUFLLENBQzFCLENBQUMsRUFDRCxDQUFDLEVBQ0QsT0FBTyxFQUNQLElBQUksRUFDSixDQUFDLEVBQ0QsQ0FBQyxFQUNELENBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxFQUFFO1FBQ3ZCLElBQUksU0FBUyxHQUFHLGtCQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdELFNBQVMsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLFNBQVMsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRXRCLE9BQU8sU0FBUyxDQUFDO0lBQ25CLENBQUMsQ0FDRixDQUFDO0lBRUYscUJBQVMsQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFO1FBQ25CLEtBQUs7UUFDTCxrQkFBTSxDQUFDLFNBQVMsQ0FDZCxLQUFLLEdBQUcsQ0FBQyxFQUNULE1BQU0sR0FBRyxjQUFjLEdBQUcsQ0FBQyxFQUMzQixLQUFLLEVBQ0wsY0FBYyxFQUNkLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUNuQjtLQUNGLENBQUMsQ0FBQztJQUVILE9BQU87UUFDTCxJQUFJO1FBQ0osTUFBTTtRQUNOLE9BQU87S0FDUixDQUFDO0FBQ0osQ0FBQyxDQUFDO0FBNUNXLFFBQUEsaUJBQWlCLHFCQTRDNUIifQ==