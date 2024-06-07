var swiper = new Swiper(".swiper1", {
	slidesPerView: 2.45,
	spaceBetween: 8,
	loop: true,
	centeredSlides: true,
	allowTouchMove: false,
	speed: 1500,
	autoplay: {
		delay: 2800,
		disableOnInteraction: false,
	},
	on: {
		slideChange: function () {
			if (this.realIndex === 0) {
				changeBackgroundGradient([52, 46, 39, 67, 56, 43], 15);
				item_2.children[0].classList.add("white_color");
				item_2.children[0].children[2].children[0].children[0].classList.add(
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.add(
					"white_color"
				);
				item_2.children[1].children[0].classList.add("white_color");
			} else if (this.realIndex === 1) {
				changeBackgroundGradient([38, 38, 38, 46, 46, 46], 25);
			} else if (this.realIndex === 2) {
				changeBackgroundGradient([204, 208, 205, 247, 248, 247], 5);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 3) {
				changeBackgroundGradient([45, 31, 35, 59, 33, 40], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else if (this.realIndex === 4) {
				changeBackgroundGradient([64, 13, 17, 92, 0, 7], 25);
			} else if (this.realIndex === 5) {
				changeBackgroundGradient([61, 56, 43, 79, 70, 46], 15);
			} else if (this.realIndex === 6) {
				changeBackgroundGradient([225, 192, 150, 250, 228, 200], 5);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 7) {
				changeBackgroundGradient([45, 171, 213, 54, 205, 255], 5);
			} else if (this.realIndex === 8) {
				changeBackgroundGradient([202, 207, 211, 246, 247, 248], 5);
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_5",
					"color_3"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_5",
					"color_3"
				);
			} else if (this.realIndex === 9) {
				changeBackgroundGradient([205, 207, 206, 247, 248, 247], 5);
			} else if (this.realIndex === 10) {
				changeBackgroundGradient([55, 34, 21, 76, 38, 16], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else if (this.realIndex === 11) {
				changeBackgroundGradient([206, 206, 206, 247, 247, 247], 5);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 12) {
				changeBackgroundGradient([45, 37, 32, 58, 43, 34], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else if (this.realIndex === 13) {
				changeBackgroundGradient([41, 39, 35, 51, 48, 40], 5);
			} else if (this.realIndex === 14) {
				changeBackgroundGradient([38, 38, 38, 46, 46, 46], 5);
			} else if (this.realIndex === 15) {
				changeBackgroundGradient([151, 204, 234, 207, 238, 255], 5);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 16) {
				changeBackgroundGradient([239, 174, 174, 255, 240, 240], 25);
			} else if (this.realIndex === 17) {
				changeBackgroundGradient([239, 174, 215, 255, 240, 249], 25);
			} else if (this.realIndex === 18) {
				changeBackgroundGradient([187, 207, 225, 243, 247, 252], 5);
			} else if (this.realIndex === 19) {
				changeBackgroundGradient([52, 26, 44, 70, 24, 57], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_5",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else if (this.realIndex === 20) {
				changeBackgroundGradient([35, 36, 41, 40, 43, 51], 10);
			} else if (this.realIndex === 21) {
				changeBackgroundGradient([206, 206, 206, 247, 247, 247], 10);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_3"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 22) {
				changeBackgroundGradient([38, 38, 38, 46, 46, 46], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_3",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else if (this.realIndex === 23) {
				changeBackgroundGradient([165, 140, 116, 201, 181, 162], 5);
				item_2.children[0].classList.replace("white_color", "color_5");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
				item_2.children[1].children[0].classList.replace(
					"white_color",
					"color_5"
				);
			} else if (this.realIndex === 24) {
				changeBackgroundGradient([0, 20, 4, 0, 17, 3], 5);
				item_2.children[0].classList.replace("color_5", "white_color");
				item_2.children[0].children[2].children[0].children[0].classList.replace(
					"color_5",
					"white_color"
				);
				item_2.children[0].children[2].children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
				item_2.children[1].children[0].classList.replace(
					"color_5",
					"white_color"
				);
			} else {
				changeBackgroundGradient([0, 0, 0, 0, 0, 0], 25);
			}
		},
	},
});
