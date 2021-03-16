import Scale from './Objects/Scale.mjs';

var scale;

const setup = function() {
    createCanvas(1000, 700);
    // Creating Scale
    scale = new Scale();
}

const draw = function() {
    background(100, 100, 100);
    scale.update();
    scale.draw();
}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.setup = setup;
window.draw = draw;