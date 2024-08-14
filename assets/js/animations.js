// function isInViewport(element) {
// 	const rect = element.getBoundingClientRect()
// 	return (
// 		rect.top >= 0 &&
// 		rect.left >= 0 &&
// 		rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
// 		rect.right <= (window.innerWidth || document.documentElement.clientWidth)
// 	)
// }

gsap.registerPlugin(MotionPathPlugin)

/* Animated Dots 1 */

function showDot() {
	this._targets[0].classList.add("show-dot")
}

function showText() {
	this._targets[0].classList.add("show-text")
}

const animatedDots1 = document.querySelectorAll(".section-animation-1 .glow-dot")
const endValues1 = [0.25, 0.52, 0.92]
const delayValues1 = [0, 1, 3]
const durationValues1 = [0.5, 1.5, 2.2]

function dotsAnimate1() {
	animatedDots1.forEach(function (dot, index) {
		gsap.to(dot, {
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
		})
	})
}

dotsAnimate1()

/* Animated Dots 2 */

const animatedDots2 = document.querySelectorAll(".section-animation-2 .glow-dot")

const endValues2 = [0.2, 0.4, 0.6, 0.8]
const delayValues2 = [0, 1, 3, 5]
const durationValues2 = [0.5, 1.5, 1.2, 1]

function dotsAnimate2() {
	animatedDots2.forEach(function (dot, index) {
		gsap.to(dot, {
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
		})
	})
}

dotsAnimate2()

/* Animated Dots 3 */

const animatedDots3 = document.querySelectorAll(".section-animation-3 .glow-dot")

function dotsAnimate3() {
	animatedDots3.forEach(function (dot, index) {
		const start = index === 0 ? 0.2 : 0.7 // Determine starting point based on index

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
		})
	})
}

dotsAnimate3()

/* Animated Dots 4 */

const animatedDots4 = document.querySelectorAll(".section-animation-4 .glow-dot")
const animation4 = document.querySelector(".solutions-animation-4")

const endvalue1 = 1 / 6
const endvalue3 = 5 / 6

const endValues4 = [endvalue1, 0.5, endvalue3]
const delayValues4 = [0, 1, 3]
const durationValues4 = [0.5, 1.5, 1.2]

function dotsAnimate4() {
	animatedDots4.forEach(function (dot, index) {
		gsap.to(dot, {
			duration: durationValues2[index],
			delay: delayValues2[index],
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
		})
	})
}

dotsAnimate4()

// if (isInViewport(sectionAnimation4)) {
// 	console.log("animatedDots4 is in the viewport!")
// 	dotsAnimate4()
// }

// function onScrollCheck() {
// 	if (isInViewport(animation4)) {
// 		console.log("animation4 is in the viewport!")
// 		dotsAnimate4()
// 	} else {
// 		console.log("animation4 is NOT in the viewport.")
// 	}
// }

// window.addEventListener("scroll", onScrollCheck)

// // You can also check on page load in case the element is already in the viewport
// window.addEventListener("load", onScrollCheck)
