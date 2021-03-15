import Note from './Objects/Note.mjs';

let note = new Note(0, 0);

const setup = function() {
    console.log(note.pos.x, note.pos.y);
}

const draw = function() {

}

// Exposing Browser to p5 functions because modules are wonky w/ p5
window.setup = setup;
window.draw = draw;