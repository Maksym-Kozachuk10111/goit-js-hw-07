const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onTextInput = (event) => {
  const inputValue = event.currentTarget.value.trim();

  refs.output.textContent = inputValue === "" ? "Anonymous" : inputValue;
};

refs.input.addEventListener("input", onTextInput);
