const outer = document.getElementById("outer");
const inner = document.getElementById("inner");

outer.addEventListener("click", () => {
  console.log("Outer div clicked");
});

inner.addEventListener("click", () => {
  console.log("Inner div clicked");
});
