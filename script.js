let hackingText = [
  "Reading your files",
  "Password files detected",
  "Sending all files and passwords to server",
  "Cleaning up",
];

const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.classList.add("message");
  div.textContent = item;
  terminal.appendChild(div);

  let t = setInterval(() => {
    if (div.innerHTML.endsWith("...")) {
      div.innerHTML = div.innerHTML.slice(0, div.innerHTML.length - 3);
    } else {
      div.innerHTML = div.innerHTML + ".";
    }
  }, 200);

  setTimeout(() => {
    clearInterval(t);
    if (div.innerHTML.endsWith("...")) {
      div.innerHTML = div.innerHTML.slice(0, div.innerHTML.length - 3);
    }
  }, 3000);
};

const randomDelay = () => {
  return new Promise((resolve) => {
    let timeout = 1000 + 2000 * Math.random();
    setTimeout(resolve, timeout);
  });
};

async function main() {
  for (const item of hackingText) {
    await addItem(item);
  }
  let finalMessage = document.createElement("div");
  finalMessage.textContent = "Hacking successful!";
  finalMessage.classList.add("message", "blink");
  terminal.appendChild(finalMessage);
}

main();
