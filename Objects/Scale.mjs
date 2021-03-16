export default class Scale {
	constructor() {
		this.notes = [];
		this.setupNotes();
	}

	setupNotes() {

	}

	drawBar() {

	}

	draw () {
		this.drawBar();
		this.notes.forEach(note => {
			note.draw();
		});
	}
}