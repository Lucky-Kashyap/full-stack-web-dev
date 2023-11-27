// gsap

var timeline = gsap.timeline();

timeline.from(".main nav", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from(".main>h1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: -60,
});

gsap.from(".main .img1", {
  delay: 0.4,
  opacity: 0,
  duration: 1,
  y: 60,
});
gsap.from(".main .img2", {
  delay: 0.8,
  opacity: 0,
  duration: 1,
  x: 60,
});
gsap.from(".main .img3", {
  delay: 1,
  opacity: 0,
  duration: 1,
  y: -60,
});
