import { MoveTo } from "../vendor/moveTo";

const move = () => {
  const moveTo = new MoveTo();
  let triggers = document.querySelectorAll(".js-trigger");
  triggers.forEach((item) => {
    moveTo.registerTrigger(item);
  });
};

export { move };
