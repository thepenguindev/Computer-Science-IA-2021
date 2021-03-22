class Scale {
	constructor(images) {
		this.notes = [];
		this.x_dist = 30;
		this.y_dist = 5;
		this.selectedNote = undefined;

		this.setupNotes(images);
	}

	setupNotes(images) {
		let startPos = new Vec2(100, 400);

		let b_flat = new Note(startPos.x, startPos.y);
		b_flat.getImages(images);
		b_flat.setFlat(true);
		this.notes.push(b_flat);
		startPos.x += this.x_dist;

		let b_natural = new Note(startPos.x, startPos.y);
		b_natural.getImages(images);
		b_natural.setNatural(true);
		this.notes.push(b_natural);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let c = new Note(startPos.x, startPos.y);
		this.notes.push(c);
		startPos.x += this.x_dist;

		let c_sharp = new Note(startPos.x, startPos.y);
		c_sharp.getImages(images);
		c_sharp.setSharp(true);
		this.notes.push(c_sharp);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let d = new Note(startPos.x, startPos.y);
		this.notes.push(d);
		startPos.x += this.x_dist;

		let d_sharp = new Note(startPos.x, startPos.y);
		d_sharp.getImages(images);
		d_sharp.setSharp(true);
		this.notes.push(d_sharp);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let e = new Note(startPos.x, startPos.y);
		this.notes.push(e);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let f = new Note(startPos.x, startPos.y);
		this.notes.push(f);
		startPos.x += this.x_dist;

		let f_sharp = new Note(startPos.x, startPos.y);
		f_sharp.getImages(images);
		f_sharp.setSharp(true);
		this.notes.push(f_sharp);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let g = new Note(startPos.x, startPos.y);
		this.notes.push(g);
		startPos.x += this.x_dist;

		let g_sharp = new Note(startPos.x, startPos.y);
		g_sharp.getImages(images);
		g_sharp.setSharp(true);
		this.notes.push(g_sharp);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let a = new Note(startPos.x, startPos.y);
		this.notes.push(a);
		startPos.x += this.x_dist; startPos.y -= this.y_dist;

		let high_b_flat = new Note(startPos.x, startPos.y);
		high_b_flat.getImages(images);
		high_b_flat.setFlat(true);
		this.notes.push(high_b_flat);
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