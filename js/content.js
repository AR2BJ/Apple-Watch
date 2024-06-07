// Selecting various elements from the document
let button = document.querySelector(
	"div.wrapper > main > div.content9 > div.content9 > div.items > div.head > div.item_footer > p"
);
let item_2 = document.querySelector(
	"div.wrapper > main > div.content13 > div.content13 > div.items > div.item_2"
);
let pause = document.querySelector(
	"div.wrapper > main > div.content13 > div.content13 > div.items > div.item_2 > div.pause > a > svg:nth-of-type(1)"
);
let play = document.querySelector(
	"div.wrapper > main > div.content13 > div.content13 > div.items > div.item_2 > div.pause > a > svg:nth-of-type(2)"
);
let slide = document.querySelectorAll(
	"div.wrapper > main > div.content13 > div.content13 > div.items > div.item_2 > div.swiper > div.swiper-wrapper > div.swiper-slide"
);
let img = document.querySelectorAll(
	"div.wrapper > main > div.content9 > div.content9 > div.items > div.img > img"
);

// Function to apply transform based on window width and scroll position
let applyTransform = () => {
	if (
		window.screen.width > 1086 &&
		window.screen.width < 734 &&
		window.scrollY >= 8541
	) {
		img.forEach((elem, index) => {
			if (index >= 3 && index <= 5) {
				elem.classList.add("transform");
			}
		});
	} else {
		if (window.scrollY > 6000) {
			img.forEach((elem, index) => {
				if (index >= 3 && index <= 5) {
					elem.classList.add("transform");
				}
			});
		}
	}
};

// Apply transform on load and scroll events
window.addEventListener("load", applyTransform);
window.addEventListener("scroll", applyTransform);

// Mouse enter and leave events for button
button.children[0].addEventListener("mouseenter", () => {
	button.className = "hover";
});

button.children[0].addEventListener("mouseleave", () => {
	button.classList.remove("hover");
});

// Click event listener for pause button
pause.addEventListener("click", () => {
	pause.style.display = "none";
	play.style.display = "block";
	swiper.autoplay.stop(); // Assuming swiper is defined elsewhere
});

// Click event listener for play button
play.addEventListener("click", () => {
	play.style.display = "none";
	pause.removeAttribute("style");
	swiper.autoplay.start(); // Assuming swiper is defined elsewhere
});

// Mouse events for each slide
slide.forEach((elem) => {
	elem.addEventListener("mousedown", () => {
		pause.style.display = "none";
		play.style.display = "block";
		swiper.autoplay.stop(); // Assuming swiper is defined elsewhere
	});
});

slide.forEach((elem) => {
	elem.children[2].addEventListener("mouseenter", () => {
		swiper.autoplay.stop(); // Assuming swiper is defined elsewhere
	});
});

slide.forEach((elem) => {
	elem.children[2].addEventListener("mouseleave", () => {
		if (play.style.display === "none") {
			swiper.autoplay.start(); // Assuming swiper is defined elsewhere
		} else {
			swiper.autoplay.stop(); // Assuming swiper is defined elsewhere
		}
	});
});

// Change background gradient of item_2 function
item_2.style.background = "linear-gradient(rgb(52, 46, 39), rgb(67, 56, 43))";
function changeBackgroundGradient(endColor, time) {
	const currentColor = window
		.getComputedStyle(item_2)
		.getPropertyValue("background-image")
		.match(/[0-9][0-9][0-9]|[0-9][0-9]|[0-9]/g)
		.map((item) => parseInt(item, 10));
	const interval = setInterval(() => {
		let flag = false;
		for (let i = 0; i < 6; i++) {
			if (currentColor[i] !== endColor[i]) {
				flag = true;
				if (currentColor[i] < endColor[i]) {
					currentColor[i]++;
				} else if (currentColor[i] > endColor[i]) {
					currentColor[i]--;
				} else {
					currentColor[i] = endColor[i];
				}
			}
		}
		if (!flag) {
			clearInterval(interval);
		}
		item_2.style.background = `linear-gradient(rgb(${currentColor[0]}, ${currentColor[1]}, ${currentColor[2]}), rgb(${currentColor[3]}, ${currentColor[4]}, ${currentColor[5]}))`;
	}, time);
}
