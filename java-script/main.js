// rotaion gear div
let geariconDiv = document.querySelector(".gearicon");
// rotation gear
let rotationDegree = document.querySelector(".gearicon i");
// main container
let mainContainer = document.querySelector(".main-container");
// aside container
let AsideContainer = document.querySelector(".aside-container");
// my name container
let MyNameDiv = document.querySelector(".h1div");
// my name h1 (content)
let MyNameH1 = document.querySelector(".h1div h1");
// all lis
let allLi = document.querySelectorAll("ul LI");
// second main container
let contentContainer = document.querySelector(".content-container");
// info container
let infoContainer = document.querySelector(".info");
// my name span
let MyNameSpan = document.querySelector(".info .hello span");
// my job span
let Myjob = document.querySelector(".job");
// my job p
let MyJobPar = document.querySelector(".info p");
// about me on click
let myButton = document.querySelector(".info a");
// home page btn
let homepagebtn = document.querySelector(".homepage");
// about me page button------------------------------------------------------------------------
let aboutPagebtn = document.querySelector(".aboutpage");
// the about page
let aboutpage = document.querySelector(".aboutmecontainer");
let moreaboutbtn = document.querySelector(".aboutmediv");
// the portfolio btn
let portbtn = document.querySelector(".Portifolio");
// the portfolio page
let portpage = document.querySelector(".portifolio-container");
let allzoomicons = document.querySelectorAll(".zoom");
let rightarrow = document.querySelector(".rightarrow");
let leftarrow = document.querySelector(".leftarrow");
let closeicondiv = document.querySelector(".closeiconmark");
let allpictures = document.querySelectorAll("#allzoompics");
let zoomedpics = document.querySelectorAll(".allpics");
let currentpic = 1;
// photo slider
let test = document.querySelector(".test1");
// link on zoom
let linkedProjetcs = document.querySelector("#mylinks");
// the contact btn
let contactbtn = document.querySelector(".contact");
// contact page
let contactPage = document.querySelector(".contactcontainer");

// root colors
const rootcolors = document.querySelector(":root");
// up button
scrollupbutton = document.querySelector(".up");
// scroll up function
let gearcolor = 0;
window.onscroll = function () {
  scrollFunction();
};
// up arrow display
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollupbutton.style.setProperty("display", "block");
  } else {
    scrollupbutton.style.setProperty("display", "none", "important");
  }
}
// scrolling action
function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
// onclick action to go to top
scrollupbutton.onclick = function () {
  topFunction();
};

// create clicking gear button and its div

rotationDegree.addEventListener("click", (e) => {
  geariconDiv.classList.toggle("win");
  rotationDegree.classList.toggle("mycolorschange");

  if (rotationDegree.classList.contains("mycolorschange")) {
    rotationDegree.style.setProperty("color", "var(--background-color)");
  } else {
    rotationDegree.style.setProperty("color", "var(--writingcolor)");
  }

  createcolorspans();
});
// creating colors spans

function createcolorspans() {
  if (geariconDiv.classList.contains("win")) {
    let colorsDiv = document.createElement("div");
    colorsDiv.classList.toggle("colorsfield");
    let paragraphDiv = document.createElement("div");
    let themeParagraph = document.createElement("p");
    let themeParagraphText = document.createTextNode("theme colors");
    themeParagraph.appendChild(themeParagraphText);
    paragraphDiv.appendChild(themeParagraph);
    colorsDiv.appendChild(paragraphDiv);
    geariconDiv.appendChild(colorsDiv);
    let spansDiv = document.createElement("div");
    spansDiv.classList.add("colorballs");

    for (i = 0; i < 5; i++) {
      let colorSpans = document.createElement("span");
      colorSpans.className = `colorspan${i}`;
      colorsDiv.appendChild(spansDiv);
      spansDiv.appendChild(colorSpans);
    }
    // my colors theme

    let redcolor = document.querySelector(".colorspan0");
    let orangecolor = document.querySelector(".colorspan1");
    let trequezcolor = document.querySelector(".colorspan2");
    let bluecolor = document.querySelector(".colorspan3");
    let pinkcolor = document.querySelector(".colorspan4");

    // red color theme
    redcolor.addEventListener("click", (r) => {
      rootcolors.style.setProperty("--background-color", "#ff3c2f");
      rootcolors.style.setProperty("--hoverlay", "rgb(231 79 79 / 20%)");
    });
    // orange color theme
    orangecolor.addEventListener("click", (o) => {
      rootcolors.style.setProperty("--background-color", "#ef6805");
      rootcolors.style.setProperty("--hoverlay", "rgb(239 104 5 / 20%)");
    });
    // trequez color theme
    trequezcolor.addEventListener("click", (t) => {
      rootcolors.style.setProperty("--background-color", "#259583");
      rootcolors.style.setProperty("--hoverlay", "rgb(37 149 131 / 20%)");
    });
    // blue color theme
    bluecolor.addEventListener("click", (b) => {
      rootcolors.style.setProperty("--background-color", "#0944a0");
      rootcolors.style.setProperty("--hoverlay", "rgb(9 68 160 / 20%)");
    });
    // pink color theme
    pinkcolor.addEventListener("click", (p) => {
      rootcolors.style.setProperty("--background-color", "#ff56b8");
      rootcolors.style.setProperty("--hoverlay", "rgb(255 86 184 / 20%)");
    });
  } else {
    document.querySelector(".colorsfield").classList.add("animation");

    setTimeout(() => {
      document.querySelector(".colorsfield").remove();
    }, 500);
  }
}
// hover overlay effect

// night and sunmode

let sunsymbol = document.querySelector(".sun");
let moonsymbol = document.querySelector(".moon");
let workcontainer = document.querySelector(".workhistory");
let certcontainer = document.querySelector(".certifications");
let myfooter = document.querySelector(".foot");
moonsymbol.style.setProperty("display", "none");

sunsymbol.addEventListener("click", (sun) => {
  rootcolors.style.setProperty("--writingcolor", "black");
  rootcolors.style.setProperty("--main-color", "white");
  rootcolors.style.setProperty("--secondary-color", "#ccc");
  sunsymbol.style.setProperty("display", "none");
  moonsymbol.style.setProperty("display", "block");
  workcontainer.style.setProperty("--divcolor", "#a4a4a4");
  certcontainer.style.setProperty("--divcolor", "#a4a4a4");
  myfooter.style.setProperty("--divcolor", "#a4a4a4");
});
moonsymbol.addEventListener("click", (moon) => {
  rootcolors.style.setProperty("--writingcolor", "white");
  rootcolors.style.setProperty("--main-color", "#161516");
  rootcolors.style.setProperty("--secondary-color", "#232123");
  moonsymbol.style.setProperty("display", "none");
  sunsymbol.style.setProperty("display", "block");
  workcontainer.style.setProperty("--divcolor", "#232123");
  certcontainer.style.setProperty("--divcolor", "#232123");
  myfooter.style.setProperty("--divcolor", "#232123");
});

// about page button
aboutPagebtn.addEventListener("click", (a) => {
  aboutpage.classList.add("aboutanimation");
  aboutpage.style.setProperty("display", "block");
  contentContainer.style.setProperty("display", "none", "important");
  portpage.style.setProperty("display", "none", "important");
  contactPage.style.setProperty("display", "none", "important");
});
// more about button
moreaboutbtn.addEventListener("click", (k) => {
  aboutpage.classList.add("aboutanimation");
  aboutpage.style.setProperty("display", "block");
  contentContainer.style.setProperty("display", "none", "important");
  portpage.style.setProperty("display", "none", "important");
  contactPage.style.setProperty("display", "none", "important");
});
// home page button
homepagebtn.addEventListener("click", (h) => {
  contentContainer.classList.add("aboutanimation");
  contentContainer.style.setProperty("display", "block");
  aboutpage.style.setProperty("display", "none", "important");
  portpage.style.setProperty("display", "none", "important");
  contactPage.style.setProperty("display", "none", "important");
});

// portfolio button
portbtn.addEventListener("click", (p) => {
  portpage.classList.add("aboutanimation");
  portpage.style.setProperty("display", "block");
  aboutpage.style.setProperty("display", "none", "important");
  contentContainer.style.setProperty("display", "none", "important");
  contactPage.style.setProperty("display", "none", "important");
  mainContainer.classList.add("overlays");
});

// contact button
contactbtn.addEventListener("click", (c) => {
  contactPage.classList.add("aboutanimation");
  contactPage.style.setProperty("display", "flex", "important");
  aboutpage.style.setProperty("display", "none", "important");
  contentContainer.style.setProperty("display", "none", "important");
  portpage.style.setProperty("display", "none", "important");
});
if (currentpic === 1) {
  leftarrow.classList.add("stopping");
}

allzoomicons.forEach((icon, index) => {
  icon.onclick = function () {
    mainContainer.classList.add("overlay");
    rightarrow.style.setProperty("display", "block");
    leftarrow.style.setProperty("display", "block");
    let picdiv = document.createElement("div");
    picdiv.className = "picdiv";
    document.body.insertAdjacentElement("afterbegin", picdiv);
    closeicondiv.style.setProperty("display", "block");
    linkedProjetcs.style.setProperty("display", "block");
    picdiv.appendChild(closeicondiv);
    picdiv.appendChild(linkedProjetcs);
    if (icon.classList.contains("one")) {
      currentpic = 1;
    }
    if (icon.classList.contains("two")) {
      currentpic = 2;
    }
    if (icon.classList.contains("three")) {
      currentpic = 3;
    }
    if (icon.classList.contains("four")) {
      currentpic = 4;
    }
    if (icon.classList.contains("five")) {
      currentpic = 5;
    }
    if (icon.classList.contains("six")) {
      currentpic = 6;
    }
    if (icon.classList.contains("seven")) {
      currentpic = 7;
    }
    if (icon.classList.contains("eight")) {
      currentpic = 8;
    }
    if (currentpic >= 8) {
      rightarrow.classList.add("stopping");
    } else {
      rightarrow.classList.remove("stopping");
    }
    if (currentpic <= 1) {
      leftarrow.classList.add("stopping");
    } else {
      leftarrow.classList.remove("stopping");
    }
    if (index === 0) {
      linkedProjetcs.href = "https://elma7y.github.io/github-api/";
      test.src = "imgs/github.png";
    } else if (index === 1) {
      linkedProjetcs.href = "https://elma7y.github.io/local-storage/";
      test.src = "imgs/localstorage.png";
    } else if (index === 2) {
      linkedProjetcs.href = "https://elma7y.github.io/quiz-app/";
      test.src = "imgs/quiz.png";
    } else if (index === 3) {
      linkedProjetcs.href = "https://elma7y.github.io/to-do-list/";
      test.src = "imgs/todolist.png";
    } else if (index === 4) {
      linkedProjetcs.href = "https://elma7y.github.io/memory-game/";
      test.src = "imgs/memorygame.png";
    } else if (index === 5) {
      linkedProjetcs.href = "https://elma7y.github.io/hang-man/";
      test.src = "imgs/hangman.png";
    } else if (index === 6) {
      linkedProjetcs.href = "https://elma7y.github.io/photo-slider/";
      test.src = "imgs/slider.png";
    } else if (index === 7) {
      linkedProjetcs.href = "https://elma7y.github.io/my-first-project/";
      test.src = "imgs/trmplate.png";
    }
    picdiv.appendChild(test);
    test.style.setProperty("display", "block");
    rightarrow.onclick = function () {
      currentpic++;
      if (test.src.match("imgs/github.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/local-storage/";
        test.src = "imgs/localstorage.png";
      } else if (test.src.match("imgs/localstorage.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/quiz-app/";
        test.src = "imgs/quiz.png";
      } else if (test.src.match("imgs/quiz.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/to-do-list/";
        test.src = "imgs/todolist.png";
      } else if (test.src.match("imgs/todolist.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/memory-game/";
        test.src = "imgs/memorygame.png";
      } else if (test.src.match("imgs/memorygame.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/hang-man/";
        test.src = "imgs/hangman.png";
      } else if (test.src.match("imgs/hangman.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/photo-slider/";
        test.src = "imgs/slider.png";
      } else if (test.src.match("imgs/slider.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/my-first-project/";
        test.src = "imgs/trmplate.png";
      } else if (test.src.match("imgs/trmplate.png")) {
      }
      if (currentpic === 8) {
        rightarrow.classList.add("stopping");
      }
      if (currentpic === 2) {
        leftarrow.classList.remove("stopping");
      }
    };

    leftarrow.onclick = function () {
      currentpic--;
      if (currentpic === 7) {
        rightarrow.classList.remove("stopping");
      }
      if (currentpic === 1) {
        leftarrow.classList.add("stopping");
      }
      if (test.src.match("imgs/trmplate.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/photo-slider/";
        test.src = "imgs/slider.png";
      } else if (test.src.match("imgs/slider.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/hang-man/";
        test.src = "imgs/hangman.png";
      } else if (test.src.match("imgs/hangman.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/memory-game/";
        test.src = "imgs/memorygame.png";
      } else if (test.src.match("imgs/memorygame.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/to-do-list/";
        test.src = "imgs/todolist.png";
      } else if (test.src.match("imgs/todolist.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/quiz-app/";
        test.src = "imgs/quiz.png";
      } else if (test.src.match("imgs/quiz.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/local-storage/";
        test.src = "imgs/localstorage.png";
      } else if (test.src.match("imgs/localstorage.png")) {
        linkedProjetcs.href = "https://elma7y.github.io/github-api/";
        test.src = "imgs/github.png";
      }
    };
    // close mark click
    closeicondiv.onclick = function () {
      picdiv.remove();
      rightarrow.style.setProperty("display", "none");
      leftarrow.style.setProperty("display", "none");
      mainContainer.classList.remove("overlay");
      closeicondiv.remove();
      currentpic = 1;
    };
  };
});
// type writing effect
let x = 0;
let y = 0;
let txt1 = " an communication enginner";
let txt2 = " a front end developer";
let speed = 50;

function typeWriter() {
  if (x < txt1.length) {
    document.querySelector(".job").innerHTML += txt1.charAt(x);
    x++;
    setTimeout(typeWriter, speed);
  }
}
function typeWriter2() {
  if (y < txt2.length) {
    document.querySelector(".job2").innerHTML += txt2.charAt(y);
    y++;
    setTimeout(typeWriter2, speed);
  }
}
typeWriter();
setInterval((h) => {
  typeWriter2();
}, 2000);
