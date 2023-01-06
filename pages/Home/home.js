
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function colorSwitcher() {
    document.getElementById("red-green-switcher").style.backgroundColor = `green`
}


const element = document.getElementById("red-green-switcher");
const threshold = 160; // number of pixels
const delay = 10
// element.addEventListener('mouseenter', (event) => {
//   const rect = element.getBoundingClientRect();
//   const distance = Math.sqrt(Math.pow(rect.left - event.clientX, 2) + Math.pow(rect.top - event.clientY, 2));
//   if (distance < threshold) {
//     setTimeout(() => {
//         let left = getRandomInt(-200, 200)
//         let top = getRandomInt(0, 465)
//         document.getElementById("red-green-switcher").style.left = `${left}px`
//         document.getElementById("red-green-switcher").style.top = `${top}px`
//         console.log(`left: ${left}, top: ${top}`)
//     }, delay);
//   }
// });





element.addEventListener('mousemove', (event) => {
  const rect = element.getBoundingClientRect();
  const distance = Math.sqrt(Math.pow(rect.left - event.clientX, 2) + Math.pow(rect.top - event.clientY, 2));
  if (distance < threshold) {
    document.getElementById('you-almost-had-it').play();
    let left = getRandomInt(-200, 200)
    let top = getRandomInt(0, 465)
    document.getElementById("red-green-switcher").style.left = `${left}px`
    document.getElementById("red-green-switcher").style.top = `${top}px`
    console.log(`left: ${left}, top: ${top}`)
  }
});










let x = document.getElementById("click-boundary-box").getBoundingClientRect().x;
let y = document.getElementById("click-boundary-box").getBoundingClientRect().y;
let w = document.getElementById("click-boundary-box").getBoundingClientRect().width;
let h = document.getElementById("click-boundary-box").getBoundingClientRect().height;

function getCenterOfTheSquare() {
    let center_x = (x + w) / 2
    let center_y = (y + h) / 2
    return [center_x, center_y]
};

// console.log(center_x, center_y)
console.log(x, y, w, h)
console.log(getCenterOfTheSquare())
