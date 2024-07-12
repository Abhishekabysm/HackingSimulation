let hackingText = [
  "searching nearby devices",
  "one device found named 'Infinix Hot 30I'",
  "connecting to 'Infinix Hot 30I'",
  "fetching details from 'Infinix Hot 30I'",
  "instagram details fetching in progress",
  "username: 'Abhishekabyusm' fetched",
  "downloading photos, videos and messages",
  "All item fetched",
  "disconnecting from 'Infinix Hot 30I'",
];

const terminal = document.getElementById("terminal");
const statusText = document.getElementById("statusText");

const addItem = async (item) => {
  await randomDelay();
  let div = document.createElement("div");
  div.classList.add("message");
  // div.innerHTML = item;
  terminal.appendChild(div);
  setTimeout(() => {
    div.classList.add("visible");
  }, 100);

  for (let i = 0; i < item.length; i++) {
    await typeDelay();
    div.innerHTML += item[i];
  }

  let t = setInterval(() => {
    if (div.innerHTML.endsWith("|")) {
      div.innerHTML = div.innerHTML.slice(0, div.innerHTML.length - 1);
    } else {
      div.innerHTML = div.innerHTML + "|";
    }
  }, 500);

  setTimeout(() => {
    clearInterval(t);
    if (div.innerHTML.endsWith("|")) {
      div.innerHTML = div.innerHTML.slice(0, div.innerHTML.length - 1);
    }
  }, 2000);
};

const randomDelay = () => {
  return new Promise((resolve, reject) => {
    let timeout = 1000 + 2000 * Math.random();
    setTimeout(resolve, timeout);
  });
};

const typeDelay = () => {
  return new Promise((resolve) => {
    let timeout = 40 + Math.random() * 50;
    setTimeout(resolve, timeout);
  });
};

async function main() {
  for (const item of hackingText) {
    statusText.textContent = "In Progress";
    statusText.classList.add("blink");
    await addItem(item);
  }
  await randomDelay();
  statusText.textContent = "Completed";
  statusText.classList.remove("blink");
  addItem("[Hacking Successful]");
}

main();
