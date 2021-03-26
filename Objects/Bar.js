class Bar {
	constructor(position, _notes) {
		this.pos = position;
		this.notes = _notes;

		this.kBufferHeight = 4;
		this.kBufferWidth = 25;

		this.width = 4 * (this.notes[1].pos.x - this.notes[0].pos.x) + this.kBufferWidth;
		this.height = 32 + this.kBufferHeight;
	}

	drawBar() {
		fill(255, 255, 255);
		rect(this.pos.x, this.pos.y, this.width, this.height);
		for (let i = 0; i <= 3; i++)
			line(this.pos.x, this.pos.y + (this.height / 4) * i, this.pos.x + this.width, this.pos.y + (this.height / 4) * i);
	}

	draw() {
		this.drawBar();
		this.notes.forEach(note => {
			note.draw();
		})
	}
}