
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// dino
		const dino = this.add.image(400, 218, "dino");

		// text_1
		const text_1 = this.add.text(400, 408, "", {});
		text_1.setOrigin(0.5, 0.5);
		text_1.text = "Phaser 3 + Phaser Editor 2D";
		text_1.setStyle({ "fontFamily": "Arial", "fontSize": "30px" });

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 1078.0800000000002, 128, 128);
		rectangle_1.scaleX = 10;
		rectangle_1.scaleY = 0.03;
		rectangle_1.isFilled = true;

		// dino (components)
		new PushOnClick(dino);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

	}


	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
