import html2canvas from "html2canvas";
import { Bodies, Composite, Composites, Engine } from "matter-js";

export const getScreenshot = async () => {
  return await html2canvas(document.body, {
    allowTaint: true,
    y: window.scrollY,
    x: window.scrollX,
    height: window.innerHeight,
    width: window.innerWidth,
  });
};

export const createStackEngine = (width: number, height: number) => {
  let engine = Engine.create();
  engine.gravity.y = 0.05;

  let world = engine.world;

  let WALL_THICKNESS = 50;
  let UNIT_SIZE = 20;

  let columns = Math.ceil(width / UNIT_SIZE);
  let rows = Math.ceil(height / UNIT_SIZE);

  var stack = Composites.stack(
    0,
    0,
    columns,
    rows,
    0,
    0,
    (x: number, y: number) => {
      let rectangle = Bodies.rectangle(x, y, UNIT_SIZE, UNIT_SIZE);
      rectangle.restitution = 0;
      rectangle.density = 0;

      return rectangle;
    }
  );

  Composite.add(world, [
    stack,
    Bodies.rectangle(
      width / 2,
      height + WALL_THICKNESS / 2,
      width,
      WALL_THICKNESS,
      { isStatic: true }
    ),
  ]);

  return {
    rows,
    engine,
    columns,
  };
};
