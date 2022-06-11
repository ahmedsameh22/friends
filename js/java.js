// change the backGround of landing page every 5s
let bGround = document.querySelector(".landing");
let timeInterval;
let IntervalChange = () => {
  timeInterval = setInterval((changeBg) => {
    let x = Math.floor(Math.random() * 5 + 1);
    bGround.style.backgroundImage = `url(img/f${x}.jpg)`;
  }, 5000);
};
isTrue = true;
if (isTrue === true) {
  IntervalChange();
}
//hide and show setting option
let settingIcon = document.querySelector(".option .icon");
let setting = document.querySelector(".option ");
settingIcon.addEventListener("click", (e) => {
  setting.classList.toggle("active-option");
  settingIcon.firstChild.nextSibling.classList.toggle("fa-spin");
});

//change overlay of page and color active in option
let overlay = document.querySelector(".overlay");
let colorbG = Array.from(document.querySelectorAll(".colors li"));
let BGchooseList = Array.from(document.querySelectorAll(".choose li"));

let removeActiveClass = (x) => {
  x.forEach((e) => {
    e.classList.remove("active");
  });
};
colorbG.forEach((e) => {
  e.addEventListener("click", (event) => {
    removeActiveClass(colorbG);
    event.target.classList.add("active");
    color = event.target.getAttribute("data-color");
    document.documentElement.style.setProperty("--main-color", color);
    //set color on localsrotge
    mainColor = localStorage.setItem("color-option", color);
  });
});
mainColor = localStorage.getItem("color-option");
if (mainColor != null) {
  document.documentElement.style.setProperty("--main-color", mainColor);
  removeActiveClass(colorbG);
  colorbG.forEach((li) => {
    if (li.getAttribute("data-color") === mainColor) {
      li.classList.add("active");
    }
  });
}
let checkChooesBg = (choose) => {
  if (choose === "yes") {
    isTrue = true;
    IntervalChange();
  } else if (choose === "no") {
    isTrue = false;
    clearInterval(timeInterval);
  }
};

BGchooseList.forEach((e) => {
  e.addEventListener("click", (event) => {
    removeActiveClass(BGchooseList);
    event.target.classList.add("active");
    let choose = event.target.getAttribute("data-info");
    checkChooesBg(choose);
    //set choose on localsrotge
    bGoption = localStorage.setItem("bg-option", choose);
  });
});
bGoption = localStorage.getItem("bg-option");
if (bGoption != null) {
  removeActiveClass(BGchooseList);
  checkChooesBg(bGoption);
  BGchooseList.forEach((li) => {
    if (li.getAttribute("data-info") === bGoption) {
      li.classList.add("active");
    }
  });
}

let moveis = document.querySelector(".our-movies");
window.onscroll = () => {
  let moveisOffsetTop = moveis.offsetTop;
  let hightViewport = this.innerHeight;
  let moveisheight = moveis.offsetHeight;
  let windowOffsety = this.pageYOffset;
  if (windowOffsety > moveisOffsetTop + moveisheight - windowOffsety) {
    let spans = Array.from(document.querySelectorAll(".progrss-wid span"));
    spans.forEach((span) => {
      span.style.width = span.getAttribute("data-progress");
    });
  }
};

let x = document.querySelector(".main-game .container");
let y = document.querySelectorAll(".main-game .container div");
let result = document.querySelector(".result");
let playGame = document.querySelector("[name='x-o']");
let playColor = document.querySelector("[name='x-o-color']");
let bgColor = document.querySelector("[name='x-o-bg']");
let curent = "X";
let colors = "";

playGame.onclick = function () {
  curent = playGame.value;
};
playColor.onchange = function () {
  colors = playColor.value;
};
let f;
x.addEventListener(
  "click",
  (f = (event) => {
    if (event.target.classList.contains("container")) {
    } else {
      if (event.target.textContent === "") {
        event.target.textContent = curent;
        event.target.classList.add("done");
        console.log(colors);
        colors === "" ? "" : (event.target.style.color = colors);
        next();
        checkwinner();
        drow();
      }
    }
  })
);
function play() {}
function drow() {
  let countDiv = 1;
  for (let i = 0; i < y.length; i++) {
    if (y[i].classList.contains("done")) {
      console.log(countDiv++);
      if (countDiv === 10 && checkwinner() === false) {
        alert("Game is drow");
        setTimeout(function () {
          window.location.reload();
        }, 10);
      }
    }
  }
}

function next() {
  let count = 1;
  for (let i = 0; i < y.length; i++) {
    let x = Math.floor(Math.random() * (9 - 1)) + 1; //  4 5 6 8 9
    if (y[x].textContent === "") {
      if (curent === "X") {
        y[x].textContent = "O";
        y[x].classList.add("done");
        startgame();
        break;
      } else {
        y[x].textContent = "X";
        y[x].classList.add("done");
        startgame();
        break;
      }
    }
  }
}

function makeColor(c1, c2, c3) {
  c1.style.color = "#8a2222";
  c2.style.color = "#8a2222";
  c3.style.color = "#8a2222";
}

function checkwinner() {
  if (
    y[0].textContent === y[1].textContent &&
    y[1].textContent === y[2].textContent &&
    y[0].textContent !== ""
  ) {
    makeColor(y[0], y[1], y[2]);
    res(`${y[0].textContent} is win`);
  } else if (
    y[0].textContent === y[3].textContent &&
    y[3].textContent === y[6].textContent &&
    y[0].textContent !== ""
  ) {
    makeColor(y[0], y[3], y[6]);
    res(`${y[0].textContent} is win`);
  } else if (
    y[1].textContent === y[4].textContent &&
    y[4].textContent === y[7].textContent &&
    y[1].textContent !== ""
  ) {
    makeColor(y[4], y[1], y[7]);
    res(`${y[1].textContent} is win`);
  } else if (
    y[2].textContent === y[5].textContent &&
    y[5].textContent === y[8].textContent &&
    y[2].textContent !== ""
  ) {
    makeColor(y[5], y[8], y[2]);
    res(`${y[2].textContent} is win`);
  } else if (
    y[3].textContent === y[4].textContent &&
    y[4].textContent === y[5].textContent &&
    y[3].textContent !== ""
  ) {
    makeColor(y[3], y[4], y[5]);
    res(`${y[3].textContent} is wisn`);
  } else if (
    y[6].textContent === y[7].textContent &&
    y[7].textContent === y[8].textContent &&
    y[6].textContent !== ""
  ) {
    makeColor(y[6], y[7], y[8]);
    res(`${y[6].textContent} is win`);
  } else if (
    y[0].textContent === y[4].textContent &&
    y[4].textContent === y[8].textContent &&
    y[0].textContent !== ""
  ) {
    makeColor(y[0], y[4], y[8]);
    res(`${y[0].textContent} is win`);
  } else if (
    y[2].textContent === y[4].textContent &&
    y[4].textContent === y[6].textContent &&
    y[2].textContent !== ""
  ) {
    makeColor(y[2], y[4], y[6]);
    res(`${y[2].textContent} is win`);
  } else {
    return false;
  }
}
function res(x) {
  result.innerHTML = `<span style="color:#8a2222">${x}</span> 
  <p> 5 sec to reload</p>
  <p><button class="btn">click to stop time out</button></p>
  `;
  result.style.cssText =
    " color: #000000;width: 300px; box-shadow: rgb(134 126 144 / 93%) 6px 10px 6px 10px;      border-radius: 50px;    font-size: 40px;  font-family: fantasy;   text-align: center;  margin: 15px;";
  clearInterval(Interval);
  reset();
}
let count = 0;

function reset(x) {
  if (x === "as") {
    console.log(count);
    return count;
  } else {
    let stop = setTimeout(function () {
      window.location.reload();
    }, 5000);
    count = stop;
  }
}

result.addEventListener("click", function () {
  let stop = reset("as");
  clearTimeout(stop);
});
let timePlay = document.getElementById("time");
countInteerval = 0;
let Interval = 0;
function startgame() {
  if (countInteerval === 0) {
    timePlay.innerHTML = 5;
    Interval = setInterval(timeToPlay, 1000);
    countInteerval++;
    function timeToPlay() {
      if (timePlay.innerHTML === "0") {
        console.log("sa");
        lossAlert.classList.remove("hidden");
        clearInterval(Interval);
      } else {
        timePlay.innerHTML -= 1;
      }
    }
  } else {
    countInteerval = 0;
    clearInterval(Interval);
    startgame();
  }
}
let lossAlert = document.querySelector(".main-game .overlay");
let close = document.querySelector(".close");
let tryGame = document.querySelector(".start-game-b");
let startGameB = document.querySelector(".start-game");
let show = document.querySelector(".main-game");
console.log(show);
startGameB.onclick = function () {
  show.classList.toggle("hidden");
  show.scrollIntoView();
  startgame();
};
tryGame.addEventListener("click", () => {
  window.location.reload();
});

close.addEventListener("click", () => {
  x.removeEventListener("click", f);
  lossAlert.classList.add("hidden");
});

let bullets = Array.from(document.querySelectorAll(".bullets"));
let bubs = Array.from(document.querySelectorAll(".bullets span"));
let showbub = (e) => {
  e.forEach((x) => {
    x.classList.toggle("hidden");
  });
};
bullets.forEach((bub) => {
  bub.addEventListener("mouseover", (e) => {
    showbub(bubs);
  });
  bub.addEventListener("mouseout", (e) => {
    showbub(bubs);
  });

  bub.addEventListener("click", (e) => {
    console.log(e.target.getAttribute("data-section"));
    let x = e.target.getAttribute("data-section");
    x = document.getElementById(x);
    x.scrollIntoView({
      behavior: "smooth",
    });
  });
});
let buttonManu = document.querySelector(".header .button .icon");
let showManu = document.querySelector(".header .links");

buttonManu.addEventListener("click", (e) => {
  e.stopImmediatePropagation();
  showManu.classList.toggle("active");
});
showManu.parentNode;
document.addEventListener("click", (e) => {
  console.log(e.target);
  console.log(buttonManu);
  if (
    e.target.parentNode.classList.contains("links") ||
    e.target.classList.contains("links")
  ) {
  } else if (e.target !== buttonManu) {
    showManu.classList.remove("active");
  }
});
