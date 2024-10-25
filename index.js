let btn = document.querySelectorAll(".btn");
let finish = document.querySelector(".finish");
let result = document.querySelector(".result");
let reset = document.querySelector(".reset");
let a = "";
let b = "";
let x = "";
let count = 0;
result.innerHTML = 0;
const newBlock = document.createElement("div");
newBlock.style.background = "rgb(105, 153, 90)";
newBlock.style.fontSize = "50px";
newBlock.style.width = "300px";
newBlock.innerHTML = "Calculator";
document.body.prepend(newBlock);

reset.addEventListener("click", () => {
  a = "";
  b = "";
  x = "";
  result.innerHTML = 0;
});

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    if (x === "") {
      if (
        btn[i].innerHTML !== "+" &&
        btn[i].innerHTML !== "-" &&
        btn[i].innerHTML !== "X" &&
        btn[i].innerHTML !== "/"
      ) {
        a += btn[i].innerHTML;
        result.innerHTML = a;
      } else {
        x = btn[i].innerHTML;
        result.innerHTML = x;
      }
    } else {
      b += btn[i].innerHTML;
      result.innerHTML = b;
    }
  });
}
finish.addEventListener("click", () => {
  if (x == "+") {
    count = Number(a) + Number(b);
    console.log((result.innerHTML = count));
  }
  if (x == "-") {
    count = Number(a) - Number(b);
    console.log((result.innerHTML = count));
  }
  if (x == "X") {
    count = Number(a) * Number(b);
    console.log((result.innerHTML = count));
  }
  if (x == "/") {
    count = Number(a) / Number(b);
    console.log((result.innerHTML = count));
  }
});

// const newResult = document.createElement("div");
// newResult.style.width = "100px";
// newResult.style.height = "30px";
// newResult.style.background = "grey";
// newResult.innerHTML = count.innerHTML;
// document.body.prepend(newResult);

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let sing = document.querySelectorAll(".sing");
let total = document.querySelector(".total");
let reset2 = document.querySelector(".reset2");
total.innerHTML = 0;
for (let i = 0; i < sing.length; ++i) {
  sing[i].addEventListener("click", () => {
    if (sing[i].value == "+") {
      total.innerHTML = Number(first.value) + Number(second.value);
    }
    if (sing[i].value == "-") {
      total.innerHTML = Number(first.value) - Number(second.value);
    }
    if (sing[i].value == "X") {
      total.innerHTML = Number(first.value) * Number(second.value);
    }
    if (sing[i].value == "/") {
      total.innerHTML = Number(first.value) / Number(second.value);
    }
  });
}
reset2.addEventListener("click", () => {
  first.value = 0;
  second.value = 0;
  total.innerHTML = 0;
});
