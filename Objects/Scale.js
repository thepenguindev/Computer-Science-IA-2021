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

	detectMouseClick() {
		
	}

	draw() {
		this.bars.forEach(bar => {
			bar.draw();
		});
	}

	update() {
		
	}
}