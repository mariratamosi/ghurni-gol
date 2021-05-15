window.addEventListener("DOMContentLoaded", (event) => {
  createAllCircle();
});

function createCircle(deg) {
  let div = document.createElement("div");
  div.className = "line-1 line";
  div.style = `transform: translate(-50%, -50%) rotate(` + deg + `deg)`;
  return div;
}

function createAllCircle() {
  for (let i = 0; i < 180; i += 5) {
    let div = createCircle(i);
    document.getElementById("center").append(div);
  }
}
