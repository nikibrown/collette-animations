gsap.registerPlugin(MotionPathPlugin);

function showDot() {
	this._targets[0].classList.add("show-dot");
}

function showText() {
	this._targets[0].classList.add("show-text");
}

function hideDotsAndText(dots, callback) {
	dots.forEach(function (dot) {
		dot.classList.remove("show-dot", "show-text");
	});

	// Add a 2-second delay before the next cycle begins
	gsap.delayedCall(2, function () {
		if (typeof callback === "function") {
			callback(); // Execute the callback function to restart the animation
		}
	});
}

const animatedDots1 = document.querySelectorAll(".animation-1 .glow-dot");
const endValues1 = [0.25, 0.52, 0.92];
const delayValues1 = [0, 1, 3];
const durationValues1 = [0.5, 1.5, 2.2];
const cycleDelay1 = 4;

function dotsAnimate1() {
	const timeline = gsap.timeline();

	// Animate each dot
	animatedDots1.forEach(function (dot, index) {
		timeline.to(
			dot,
			{
				duration: durationValues1[index],
				delay: delayValues1[index],
				onStart: showDot,
				onComplete: showText,
				motionPath: {
					align: "#path1",
					alignOrigin: [0.5, 0.5],
					path: "#path1",
					start: 0.1,
					end: endValues1[index],
					ease: "power1.inOut",
				},
			},
			0
		);
	});

	// Call hideDotsAndText after the animation completes, then delay before restarting
	timeline.call(
		function () {
			hideDotsAndText(animatedDots1, dotsAnimate1);
		},
		null,
		`+=${cycleDelay1}`
	);
}

dotsAnimate1();

const animatedDots2 = document.querySelectorAll(".animation-2 .glow-dot");
const endValues2 = [0.2, 0.4, 0.6, 0.8];
const delayValues2 = [0, 1, 3, 5];
const durationValues2 = [0.5, 1.5, 1.2, 1];
const cycleDelay2 = 3;

function dotsAnimate2() {
	const timeline = gsap.timeline();

	animatedDots2.forEach(function (dot, index) {
		timeline.to(
			dot,
			{
				duration: durationValues2[index],
				delay: delayValues2[index],
				onStart: showDot,
				onComplete: showText,
				motionPath: {
					align: "#path2",
					alignOrigin: [0.5, 0.5],
					path: "#path2",
					start: 0,
					end: endValues2[index],
					ease: "power1.inOut",
				},
			},
			0
		);
	});

	// Call hideDotsAndText after the animation completes, then delay before restarting
	timeline.call(
		function () {
			hideDotsAndText(animatedDots2, dotsAnimate2);
		},
		null,
		`+=${cycleDelay2}`
	);
}

dotsAnimate2();

/* Animated Dots 3 */

const animatedDots3 = document.querySelectorAll(".animation-3 .glow-dot");

function dotsAnimate3() {
	animatedDots3.forEach(function (dot, index) {
		const start = index === 0 ? 0.2 : 0.7; // Determine starting point based on index

		gsap.to(dot, {
			duration: 5, // Duration for one full circle rotation
			repeat: -1, // Repeat infinitely
			ease: "linear", // Smooth constant speed
			motionPath: {
				path: "#path3",
				align: "#path3",
				alignOrigin: [0.5, 0.5],
				start: start, // Set the starting point for the animation
				end: start + 1, // Ensure the animation completes one full loop
			},
		});
	});
}

dotsAnimate3();

/* Animated Dots 4 */

// const animatedDots4 = document.querySelectorAll(".animation-4 .glow-dot");

// const endvalue1 = 1 / 6;
// const endvalue3 = 5 / 6;

// const endValues4 = [endvalue1, 0.5, endvalue3];
// const delayValues4 = [0, 1, 3];
// const durationValues4 = [0.5, 1.5, 1.2];

// function dotsAnimate4() {
// 	animatedDots4.forEach(function (dot, index) {
// 		gsap.to(dot, {
// 			duration: durationValues2[index],
// 			delay: delayValues2[index],
// 			onStart: showDot,
// 			onComplete: showText,
// 			motionPath: {
// 				align: "#path4",
// 				alignOrigin: [0.5, 0.5],
// 				path: "#path4",
// 				start: 0,
// 				end: endValues4[index],
// 				ease: "power1.inOut",
// 			},
// 		});
// 	});
// }

// dotsAnimate4();

const animatedDots4 = document.querySelectorAll(".animation-4 .glow-dot");

const endvalue1 = 1 / 6;
const endvalue3 = 5 / 6;

const endValues4 = [endvalue1, 0.5, endvalue3];
const delayValues4 = [0, 1, 3];
const durationValues4 = [0.5, 1.5, 1.2];
const cycleDelay4 = 3;

function dotsAnimate4() {
	const timeline = gsap.timeline();

	animatedDots4.forEach(function (dot, index) {
		timeline.to(
			dot,
			{
				duration: durationValues4[index],
				delay: delayValues4[index],
				onStart: showDot,
				onComplete: showText,
				motionPath: {
					align: "#path4",
					alignOrigin: [0.5, 0.5],
					path: "#path4",
					start: 0,
					end: endValues4[index],
					ease: "power1.inOut",
				},
			},
			0
		);
	});

	// Call hideDotsAndText after the animation completes, then delay before restarting
	timeline.call(
		function () {
			hideDotsAndText(animatedDots4, dotsAnimate4);
		},
		null,
		`+=${cycleDelay4}`
	);
}

dotsAnimate4();

// https://collettedev.flywheelsites.com/wp-content/uploads/2024/08/patient-circle-8.webp

const animatedDots5 = document.querySelectorAll(".animation-5 .glow-dot");
const endValues5 = [0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9];
const delayValues5 = [0, 1, 3, 5, 7, 9, 11, 13];
const durationValues5 = [0.5, 1.5, 1.7, 1.9, 2, 2.2, 2.5, 2.6];
const cycleDelay5 = 10;

function dotsAnimate5() {
	const timeline = gsap.timeline();

	animatedDots5.forEach(function (dot, index) {
		timeline.to(
			dot,
			{
				duration: durationValues5[index],
				delay: delayValues5[index],
				onStart: showDot,
				onComplete: showText,
				motionPath: {
					align: "#path5",
					alignOrigin: [0.5, 0.5],
					path: "#path5",
					start: 0,
					end: endValues5[index],
					ease: "power1.inOut",
				},
			},
			0
		);
	});

	// Call hideDotsAndText after the animation completes, then delay before restarting
	timeline.call(
		function () {
			hideDotsAndText(animatedDots5, dotsAnimate5);
		},
		null,
		`+=${cycleDelay5}`
	);
}

dotsAnimate5();
