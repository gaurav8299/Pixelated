const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let intervalTitle = null;
let intervalSub = null;

// Function to animate text for "sub" element
function updateTextSub(element) {
  let iteration = 0;

  clearInterval(intervalSub);

  intervalSub = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(intervalSub);
      updateTextTitle(document.getElementById("title"));
    }

    iteration += 1;
  }, 49);
}

// Function to animate text for "title" element
function updateTextTitle(element) {
  let iteration = 0;

  clearInterval(intervalTitle);

  intervalTitle = setInterval(() => {
    element.innerText = element.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return element.dataset.value[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= element.dataset.value.length) {
      clearInterval(intervalTitle);
      document.getElementById("sub").addEventListener("mouseover", () => {
        updateTextSub(document.getElementById("sub"));
      });
    }

    iteration += 1;
  }, 49);
}

// Start animation for "title"
updateTextTitle(document.getElementById("title"));
