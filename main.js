import Scale from './Objects/Scale.mjs';

// Objects
var scale;

// Images
var sharp_image;

const preload = function() {
    sharp_image = loadImage('images/sharp.png');
}

const setup = function() {
    createCanvas(1000, 700);
    // Creating Scale
    scale = new Scale();
}

const draw = function() {
    background(100, 100, 100);
    image(sharp_image, 100, 400);
    scale.update();
    scale.draw();
}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.preload = preload;
window.setup = setup;
window.draw = draw;