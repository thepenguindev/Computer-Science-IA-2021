import Note from './Note.mjs';

export default class Scale {
	constructor() {
		this.notes = [];
		this.selectedNote = undefined;
		this.setupNotes();
	}

	setupNotes() {
		this.notes.push(new Note(100, 100));
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