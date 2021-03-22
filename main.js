var music_scale;

// Images
let images = {
    sharp_image: undefined,
    flat_image: undefined,
    natural_image: undefined
}

const preload = function() {
    images.sharp_image = loadImage('images/sharp.png');
    images.flat_image = loadImage('images/flat.png');
    images.natural_image = loadImage('images/natural.png');
}

const setup = function() {
    createCanvas(1000, 700);
    imageMode(CENTER);
    rectMode(CENTER);
    // Creating Scale
    music_scale = new Scale(images);
}

const draw = function() {
    background(100, 100, 100);
    music_scale.update();
    music_scale.draw();
}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.preload = preload;
window.setup = setup;
window.draw = draw;