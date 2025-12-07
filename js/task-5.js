const refs = {
  body: document.body,
  spanColor: document.querySelector(".color"),
  btnChanger: document.querySelector(".change-color"),
};

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const onChangeColorClick = () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.spanColor.textContent = randomColor;
};

refs.btnChanger.addEventListener("click", onChangeColorClick);
