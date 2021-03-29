/// FUN HTML MANIPULATION THAT I HATE *cries*
var currentlySelectedKey;

$(() => {
    // Update Currently Selected Key
    currentlySelectedKey = $('select').val();
    $('select').change(() => {
        currentlySelectedKey = $('select').val();
    });
});

/// P5 JS
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
    createCanvas(540, 140);
    imageMode(CENTER);
    // Creating Scale
    music_scale = new Scale(images);
}

const draw = function() {
    background(150, 150, 150);
    music_scale.update(currentlySelectedKey);
}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.preload = preload;
window.setup = setup;
window.draw = draw;