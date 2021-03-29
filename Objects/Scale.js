class Scale {
	constructor(images) {
		this.bars = [];

		this.x_dist = 30;
		this.y_dist = 5;
		this.selectedNote = undefined;

		this.setupBars(images);
	}

	setupBars(images) {
		let barPos1 = new Vec2(50, 50);
		let change1 = new Vec2(barPos1.x + 25, barPos1.y + (3 * 8) - 1);
		// a_sharp -> c_sharp
		this.bars.push(new Bar(barPos1, [
			new Note(change1.x, change1.y)
				.getImages(images)
				.setSharp(true)
				.changePos(change1, this.x_dist, -this.y_dist)
				.setNoteValue(1),
			new Note(change1.x, change1.y)
				.changePos(change1, this.x_dist, -this.y_dist)
				.setNoteValue(2),
			new Note(change1.x, change1.y)
				.changePos(change1, this.x_dist, 0)
				.setNoteValue(3),
			new Note(change1.x, change1.y)
				.getImages(images)
				.setSharp(true)
				.changePos(change1, this.x_dist, -this.y_dist)
				.setNoteValue(4)
		]));

		let barPos2 = new Vec2(barPos1.x + this.bars[0].width, barPos1.y);
		let change2 = new Vec2(barPos2.x + 25, barPos2.y + (1 * 8) + 1);
		// d -> f
		this.bars.push(new Bar(barPos2, [
			new Note(change2.x, change2.y)
				.changePos(change2, this.x_dist, 0)
				.setNoteValue(5),
			new Note(change2.x, change2.y)
				.getImages(images)
				.setSharp(true)
				.changePos(change2, this.x_dist, -this.y_dist)
				.setNoteValue(6),
			new Note(change2.x, change2.y)
				.changePos(change2, this.x_dist, -this.y_dist)
				.setNoteValue(7),
			new Note(change2.x, change2.y)
				.changePos(change2, this.x_dist, 0)
				.setNoteValue(8)
		]));

		let barPos3 = new Vec2(barPos2.x + this.bars[0].width, barPos2.y);
		let change3 = new Vec2(barPos3.x + 25, barPos3.y);
		// f_sharp -> a
		this.bars.push(new Bar(barPos3, [
			new Note(change3.x, change3.y)
				.getImages(images)
				.setSharp(true)
				.changePos(change3, this.x_dist, -this.y_dist)
				.setNoteValue(9),
			new Note(change3.x, change3.y)
				.changePos(change3, this.x_dist, 0)
				.setLineOverUnder(true)
				.setNoteValue(10),
			new Note(change3.x, change3.y)
				.getImages(images)
				.setSharp(true)
				.setLineOverUnder(true)
				.changePos(change3, this.x_dist, -this.y_dist)
				.setNoteValue(11),
			new Note(change3.x, change3.y)
				.changePos(change3, this.x_dist, 0)
				.setLineThrough(true)
				.setNoteValue(12)
		]));
	}

	detectMouseHover() {
		let mousePos = new Vec2(mouseX, mouseY);

		if (mousePos.x >= 65 && mousePos.x <= 85 && mousePos.y >= 63 && mousePos.y <= 105)
			return this.bars[0].notes[0];
		if (mousePos.x >= 95 && mousePos.x <= 115 && mousePos.y >= 59 && mousePos.y <= 97)
			return this.bars[0].notes[1];
		if (mousePos.x >= 125 && mousePos.x <= 145 && mousePos.y >= 53 && mousePos.y <= 93)
			return this.bars[0].notes[2];
		if (mousePos.x >= 155 && mousePos.x <= 175 && mousePos.y >= 53 && mousePos.y <= 93)
			return this.bars[0].notes[3];

		if (mousePos.x >= 210 && mousePos.x <= 230 && mousePos.y >= 49 && mousePos.y <= 89)
			return this.bars[1].notes[0];
		if (mousePos.x >= 240 && mousePos.x <= 260 && mousePos.y >= 49 && mousePos.y <= 89)
			return this.bars[1].notes[1];
		if (mousePos.x >= 270 && mousePos.x <= 290 && mousePos.y >= 45 && mousePos.y <= 85)
			return this.bars[1].notes[2];
		if (mousePos.x >= 300 && mousePos.x <= 320 && mousePos.y >= 41 && mousePos.y <= 81)
			return this.bars[1].notes[3];

		if (mousePos.x >= 355 && mousePos.x <= 375 && mousePos.y >= 41 && mousePos.y <= 81)
			return this.bars[2].notes[0];
		if (mousePos.x >= 385 && mousePos.x <= 405 && mousePos.y >= 37 && mousePos.y <= 77)
			return this.bars[2].notes[1];
		if (mousePos.x >= 415 && mousePos.x <= 435 && mousePos.y >= 37 && mousePos.y <= 77)
			return this.bars[2].notes[2];
		if (mousePos.x >= 445 && mousePos.x <= 465 && mousePos.y >= 33 && mousePos.y <= 73)
			return this.bars[2].notes[3];
	}

	draw() {
		this.bars.forEach(bar => {
			bar.draw();
		});
	}

	update(currentlySelectedKeySig) {
		this.draw();
		let hoveredNote = this.detectMouseHover();
		if (hoveredNote != undefined)
			hoveredNote.highlight(255, 0, 0);
	}
}