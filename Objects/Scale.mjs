import Note from './Note.mjs';

export default class Scale {
	constructor(images) {
		this.notes = [];
		this.selectedNote = undefined;
		this.setupNotes(images);
	}

	setupNotes(images) {
		let note = new Note(100, 400);
		note.getImages(images);
		
		note.setSharp(true);
		this.notes.push(note);
	}

	drawBar() {

	}

	detectMouseClick() {
		return {
			detected: true,
			note: this.notes[0]
		};
	}

	draw () {
		this.drawBar();
		this.notes.forEach(note => {
			note.draw();
		});
	}

	update() {
		let result = this.detectMouseClick();
		if (result.detected) {
			if (this.selectedNote != result.note) this.selectedNote = result.note;
		}
	}
}