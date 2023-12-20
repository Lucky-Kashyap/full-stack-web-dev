// use Shery JS

// Shery.imageEffect(element,configurations)

Shery.imageEffect(".back", {
  style: 5,
  config: {
    a: { value: 2.52, range: [0, 30] },
    b: { value: -0.89, range: [-1, 1] },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 2.1934959349593495 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 2.6, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1.15, range: [1, 5] },
    scrollType: { value: 0 },
    geoVertex: { range: [1, 64], value: 1 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 0.2, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.47, range: [0, 1] },
    antialias_threshold: { value: 0, range: [0, 0.1] },
    noise_height: { value: 0.46, range: [0, 2] },
    noise_scale: { value: 11.45, range: [0, 100] },
  },
  gooey: true,
});

let main = document.querySelector(".main");

// let heading = document.querySelectorAll("h1");

let elem = document.querySelectorAll(".elem");

elem.forEach(function (ele) {
  let heading = ele.querySelectorAll("h1");
  let index = 0;
  let animating = false;

  main.addEventListener("click", () => {
    if (!animating) {
      animating = true;
      gsap.to(heading[index], {
        top: "-=100%",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
        onComplete: function () {
          // console.log(this._targets[0]);
          gsap.set(this._targets[0], { top: "100%" });
          animating = false;
        },
      });

      index === heading.length - 1 ? (index = 0) : index++;

      gsap.to(heading[index], {
        top: "-=100%",
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      });
    }
  });
});

// main.addEventListener("click", () => {
//   gsap.to(heading[index], {
//     top: "-=100%",
//     ease: Expo.easeInOut,
//     duration: 1,
//     onComplete: function () {
//       // console.log(this._targets[0]);
//       gsap.set(this._targets[0], { top: "100%" });
//     },
//   });

//   index === heading.length - 1 ? (index = 0) : index++;

//   gsap.to(heading[index], {
//     top: "-=100%",
//     ease: Expo.easeInOut,
//     duration: 1,
//   });
// });
