function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}

const avatar = document.querySelector("#player");
const coin = document.querySelector("#coin");
let speed = 25;

window.addEventListener("keydown", function (e) {
  if (e.key.includes("Down")) {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop + speed}px`;
  } else if (e.key.includes("Up")) {
    const currTop = extractPos(avatar.style.top);
    avatar.style.top = `${currTop - speed}px`;
  } else if (e.key.includes("Right")) {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft + speed}px`;
    avatar.style.transform = "scale(1,1)";
  } else if (e.key.includes("Left")) {
    const currLeft = extractPos(avatar.style.left);
    avatar.style.left = `${currLeft - speed}px`;
    avatar.style.transform = "scale(-1,1)";
  }
  if (isTouching(avatar, coin)) {
    moveCoin();
  }
  console.log(e.key);
});

// window.addEventListener("keydown", function (e) {
//   console.log(e);
// });

const extractPos = (pos) => {
  if (!pos) return 100;
  return +pos.slice(0, -2);
};

const moveCoin = () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  coin.style.top = `${y}px`;
  coin.style.left = `${x}px`;
};

moveCoin();
