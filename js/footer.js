// Selecting buttons to toggle slide visibility
let btn_slide = document.querySelectorAll(
	"div.wrapper > footer > div.container > div.content3_2 > div[class*='items'] > div[class*='item'] > h3 > button.btn_slide"
);

// Selecting corresponding unordered lists (ul)
let ul = document.querySelectorAll(
	"div.wrapper > footer > div.container > div.content3_2 > div[class*='items'] > div[class*='item'] > ul"
);

// Adding click event listener to each button
btn_slide.forEach((elem, index) => {
	ul.forEach((e, i) => {
		if (index === i) {
			elem.addEventListener("click", () => {
				// Toggle visibility of the corresponding ul
				if (elem.children[0].hasAttribute("style") === false) {
					e.style.position = "relative";
					e.style.opacity = 1;
					e.style.zIndex = 1;
					e.style.transform = "none";
					e.style.transition = "transform 300ms ease";
					elem.children[0].style.transform = "rotateX(180deg)";
				} else {
					e.removeAttribute("style");
					elem.children[0].removeAttribute("style");
				}
			});
		}
	});
});
