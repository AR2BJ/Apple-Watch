// Select various elements from the document
let wrapper = document.querySelector("div.wrapper");
let header = document.querySelector("div.wrapper > header");
let backdrop = document.querySelector("div.wrapper > div.backdrop");
let container_li = document.querySelectorAll(
	"div.wrapper > header > div.container_1 > ul > li"
);
let container_li_2 = document.querySelectorAll(
	"div.wrapper > header > div.container_2 > ul > li"
);
let anim_1_1 = document.querySelector("#open");
let anim_1_2 = document.querySelector("#close");
let anim_2_1 = document.querySelector("#open_2");
let anim_2_2 = document.querySelector("#close_2");
let submenu = document.querySelector(
	"div.wrapper > header > div.container_1 > div.submenu"
);
let submenu_2 = document.querySelector(
	"div.wrapper > header > div.container_2 > div.menu"
);
let con2 = document.querySelector(
	"div.wrapper > header > div.container_2 > div.menu > div.content"
);
let con2_li = document.querySelectorAll(
	"div.wrapper > header > div.container_2 > div.menu > div.content > ul > li"
);
let con2_submenu = document.querySelectorAll(
	"div.wrapper > header > div.container_2 > div.menu > div.content > div[class*='submenu']"
);
let nav = document.querySelectorAll(
	"div.wrapper > header > div.container_1 > ul > li > div.container > nav"
);
let h2 = document.querySelectorAll(
	"div.wrapper > header > div.container_1 > ul > li > div.container > nav > div[class*='item'] > h2"
);
let submenu_li = document.querySelectorAll(
	"div.wrapper > header > div.container_1 > ul > li > div.container > nav > div[class*='item'] > ul > li"
);
let products = document.querySelector(
	"div.wrapper > header > div.products > div.items > ul"
);
let next = document.querySelector(
	"div.wrapper > header > div.products > div.items > div.navigation > button.next"
);
let prev = document.querySelector(
	"div.wrapper > header > div.products > div.items > div.navigation > button.prev"
);

// Initialize a flag for toggling the menu
let flag = true;

// Add mouseenter and mouseleave event listeners to the first set of list items
container_li.forEach((elem, index) => {
	if (index !== 0 && index !== 12 && index !== 13) {
		// Skip specific indices
		elem.addEventListener("mouseenter", () => {
			// Change header and submenu background color
			header.style.backgroundColor = "#161617";
			submenu.style.backgroundColor = "#161617";
			submenu.style.transition = "all 0.32s cubic-bezier(0.4, 0, 0.6, 1)";
			submenu.style.height = 44 + nav[index - 1].clientHeight + "px";
			submenu.style.visibility = "visible";
			backdrop.style.opacity = 1;
			backdrop.style.zIndex = 2;
			backdrop.style.transition = "all 0.32s cubic-bezier(0.4, 0, 0.6, 1)";
			if (index >= 1 && index <= 11) {
				// Adjust navigation display
				nav[index - 1].style.top = "44px";
				nav.forEach((elem2, i) => {
					elem2.style.display = i === index - 1 ? "flex" : "none";
				});
			}
			// Add transition delay to h2 elements
			h2.forEach((elem) => {
				elem.style.transitionDelay = `calc(min(80ms + ((${
					elem.className.match(/[0-9][0-9]|[0-9]/g)[0]
				} - 1) * 40ms), ${
					elem.className.match(/[0-9][0-9]|[0-9]/g)[0]
				} * 80ms) + 80ms)`;
			});
			// Add transition duration to submenu list items
			submenu_li.forEach((elem) => {
				elem.style.transitionDuration = `min(160ms + 20ms * calc(8 - ${
					elem.classList[0].match(/[0-9][0-9]|[0-9]/g)[0]
				}), 240ms)`;
			});
		});
		elem.addEventListener("mouseleave", () => {
			// Remove styles on mouse leave
			header.removeAttribute("style");
			submenu.removeAttribute("style");
			nav.forEach((elem) => {
				elem.removeAttribute("style");
			});
			backdrop.removeAttribute("style");
		});
	} else {
		elem.addEventListener("mouseenter", () => {
			// Remove styles for specific indices
			header.removeAttribute("style");
			submenu.removeAttribute("style");
			nav.forEach((elem) => {
				elem.removeAttribute("style");
			});
			backdrop.removeAttribute("style");
		});
	}
});

// Add click event listener to the fifth item in the second set of list items
container_li_2[4].addEventListener("click", () => {
	// Reset styles
	document.body.removeAttribute("style");
	wrapper.children[1].removeAttribute("style");
	wrapper.children[2].removeAttribute("style");
	header.children[2].removeAttribute("style");
	header.children[3].removeAttribute("style");
	wrapper.removeAttribute("style");
	submenu_2.removeAttribute("style");
	if (flag) {
		// Open submenu
		document.body.style.height = `100dvh`;
		document.body.style.overflow = "hidden";
		wrapper.style.overflowY = "scroll";
		anim_1_1.beginElement();
		anim_2_1.beginElement();
		container_li_2.forEach((elem, index) => {
			if (index !== 0 && index !== 4) {
				elem.style.opacity = 0;
				elem.style.zIndex = -1;
			}
		});
		submenu_2.style.backgroundColor = "#161617";
		submenu_2.style.transition = "all 0.48s cubic-bezier(0.4, 0, 0.6, 1)";
		submenu_2.style.height = "100dvh";
		submenu_2.style.visibility = "visible";
		submenu_2.children[0].style.opacity = 1;
		con2_li.forEach((elem) => {
			elem.style.opacity = 1;
			elem.style.visibility = "visible";
			elem.style.transform = "translate(0)";
			elem.style.transitionDelay = `calc(.2s + ${
				elem.className.match(/[0-9][0-9]|[0-9]/g)[0]
			} * 20ms)`;
		});
	} else {
		// Close submenu
		anim_1_2.beginElement();
		anim_2_2.beginElement();
		container_li_2.forEach((elem, index) => {
			if (index !== 0 && index !== 4) {
				elem.removeAttribute("style");
			}
		});
		submenu_2.removeAttribute("style");
		submenu_2.children[0].removeAttribute("style");
		con2_li.forEach((elem) => {
			elem.style.opacity = 0;
			elem.style.visibility = "hidden";
			elem.style.transform = "translateY(-8px)";
		});
	}
	flag = !flag; // Toggle the flag
});

// Add click event listener to each item in the second container list
con2_li.forEach((elem, index) => {
	con2_submenu.forEach((e, i) => {
		if (index === i) {
			elem.addEventListener("click", () => {
				// Hide certain elements and adjust wrapper height
				document.body.removeAttribute("style");
				wrapper.children[1].style.display = "none";
				wrapper.children[2].style.display = "none";
				header.children[2].style.display = "none";
				header.children[3].style.display = "none";
				wrapper.style.height = "100dvh";
				con2_submenu.forEach((elem2, inedx2) => {
					if (index === inedx2) {
						// Adjust submenu height based on content
						if (elem2.clientHeight > 893) {
							submenu_2.style.height = `${elem2.clientHeight}px`;
						} else {
							submenu_2.style.height = "100dvh";
						}
					}
				});
				con2_li.forEach((elem) => {
					// Hide and transform list items
					elem.style.opacity = 0;
					elem.style.visibility = "hidden";
					elem.style.transform = "translate(-8px)";
					elem.style.transition = "all 0.24s cubic-bezier(.4,0,.6,1)";
				});
				// Show and transform submenu items
				e.style.opacity = 1;
				e.style.visibility = "visible";
				e.style.transform = "translate(0) scale(1)";
				e.style.transition = `opacity .24s cubic-bezier(.4,0,.6,1) .16s,transform .24s cubic-bezier(.4,0,.6,1) .16s,visibility .24s step-start .16s`;
				e.style.zIndex = 2;
				container_li_2[0].style.opacity = 1;
				container_li_2[0].style.visibility = "visible";
				container_li_2[0].style.transform = "translate(0) scale(1)";
				container_li_2[0].style.transition = `opacity .24s cubic-bezier(.4,0,.6,1) .16s,transform .24s cubic-bezier(.4,0,.6,1) .16s,visibility .24s step-start .16s`;
				container_li_2[0].style.zIndex = 2;
				container_li_2[4].addEventListener("click", () => {
					// Reset styles when clicking the fifth item again
					con2_submenu.forEach((e) => {
						e.removeAttribute("style");
					});
					container_li_2[0].removeAttribute("style");
				});
			});
		}
	});
});

// Add click event listener to the first item in the second container list
container_li_2[0].addEventListener("click", () => {
	wrapper.style.height = "100dvh";
	submenu_2.style.height = "100dvh";
	con2_submenu.forEach((e) => {
		e.removeAttribute("style");
	});
	con2_li.forEach((elem) => {
		elem.style.opacity = 1;
		elem.style.visibility = "visible";
		elem.style.transform = "translate(0)";
		elem.style.transitionDelay = "0.16s";
	});
	container_li_2[0].removeAttribute("style");
});

// Add mouseleave event listener to the header
header.addEventListener("mouseleave", () => {
	header.removeAttribute("style");
	submenu.removeAttribute("style");
	nav.forEach((elem) => {
		elem.removeAttribute("style");
	});
	backdrop.removeAttribute("style");
});

// Add click event listener to the next button
next.children[0].addEventListener("click", () => {
	products.scrollLeft += 200;
	prev.style.opacity = 1;

	products.addEventListener("scroll", () => {
		let scrollPositionX = products.scrollLeft;
		let totalWidth = products.scrollWidth;
		let visibleWidth = products.clientWidth;

		if (scrollPositionX === 0) {
			next.style.opacity = 1;
		} else if (scrollPositionX + visibleWidth >= totalWidth) {
			next.style.opacity = 0;
		}
	});
});

// Add click event listener to the previous button
prev.children[0].addEventListener("click", () => {
	products.scrollLeft -= 200;
	next.style.opacity = 1;

	products.addEventListener("scroll", () => {
		let scrollPositionX = products.scrollLeft;
		let totalWidth = products.scrollWidth;
		let visibleWidth = products.clientWidth;

		if (scrollPositionX === 0) {
			prev.style.opacity = 0;
		} else if (scrollPositionX + visibleWidth >= totalWidth) {
			prev.style.opacity = 1;
		}
	});
});
