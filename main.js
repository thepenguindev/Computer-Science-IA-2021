import Scale from './Objects/Scale.mjs';

// Objects
var scale;

// Images
let images = {
    sharp_image: undefined
}

const preload = function() {
    images.sharp_image = loadImage('images/sharp.png');
}

const setup = function() {
    createCanvas(1000, 700);
    imageMode(CENTER);
    // Creating Scale
    scale = new Scale(images);
}

const draw = function() {
    background(100, 100, 100);
    scale.update();
    scale.draw();
}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.preload = preload;
window.setup = setup;
window.draw = draw;