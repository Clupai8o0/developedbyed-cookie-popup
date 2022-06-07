const tl = gsap.timeline({
	defaults: {
		duration: 0.5,
		ease: "power1.out",
	},
});

tl.fromTo(
	".cookie-container",
	{ scale: 0.5 },
	{ scale: 1, ease: "elastic.out(1, 0.4)", duration: 1.2 }
);
tl.fromTo(
	".cookie",
	{ opacity: 0, x: -50, rotation: "-45deg" },
	{ opacity: 1, x: 0, rotation: "0deg" },
	"<25%"
);
tl.fromTo(".text", { x: 30, opacity: 0 }, { x: 0, opacity: 1 }, "<");

const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log("Hello World");
	gsap.to(".cookie-container", {
		opacity: 0,
		y: -100,
		duration: 0.5,
		ease: "power1.out",
	});
});
