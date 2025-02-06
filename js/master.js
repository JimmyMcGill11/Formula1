// Setting Box Touches
const settingsBox = document.querySelector(".settings-box");
const gearIcon = document.querySelector(".settings-box .gear");

gearIcon.onclick = _ => {
  gearIcon.classList.toggle("fa-spin");
  settingsBox.classList.toggle("open");
} 

document.addEventListener("click", event => {
  if (settingsBox.classList.contains("open") && gearIcon.classList.contains("fa-spin")) {
    if (!settingsBox.contains(event.target) && !gearIcon.contains(event.target)) {
      gearIcon.classList.remove("fa-spin");
      settingsBox.classList.remove("open");
    }
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Mode Options

const modes = document.querySelectorAll(".settings-box .mode-options span i");
const driversImgs = document.querySelectorAll(".drivers .driver-box .driver-info img");
let imgsPath = ["lewis-hamilton-mercedes.jpg", "max-verstappen-red-bull-racing.jpg", "CharlesLeclerc.png", "lando-norris-mclaren.jpg", "fernando-alonso-aston-martin-r.jpg", "esteban-ocon-alpine.jpg", "ValtteriBottas.jpg", "kevinmagnussen.png", "alex-albon-williams.jpg", "yuki-tsunoda-racing-bulls.jpg"];

if (localStorage.getItem("mode") !== null) {
  if (localStorage.getItem("mode") == 'true') {
    document.documentElement.style.setProperty("--font-color2", "#000");
    document.documentElement.style.setProperty("--font-color3", "#000");
    document.documentElement.style.setProperty("--font-color4", "#777");
    document.documentElement.style.setProperty("--main-color", "#FFF");
    document.documentElement.style.setProperty("--bg-color", "#EEE");
    document.documentElement.style.setProperty("--border-color", "#DDD");
    document.documentElement.style.setProperty("--shadow-color", "#FFFFFF18");

    let i = 0;
    driversImgs.forEach((img) => {
      img.src = `imgs/driversLightMode/${imgsPath[i]}`;
      i++;
    });
  }
}

modes.forEach(mode => {
  mode.addEventListener("click", e => {
    if (e.target.dataset.mode == "light") {
      localStorage.setItem("mode", true);
      document.documentElement.style.setProperty("--font-color2", "#000");
      document.documentElement.style.setProperty("--font-color3", "#000");
      document.documentElement.style.setProperty("--font-color4", "#777");
      document.documentElement.style.setProperty("--main-color", "#FFF");
      document.documentElement.style.setProperty("--bg-color", "#EEE");
      document.documentElement.style.setProperty("--border-color", "#DDD");
      document.documentElement.style.setProperty("--shadow-color", "#00000053");

      let i = 0;
      driversImgs.forEach((img) => {
        img.src = `imgs/driversLightMode/${imgsPath[i]}`;
        i++;
      });
    } else {
      localStorage.setItem("mode", false);
      document.documentElement.style.setProperty("--main-color", "#000");
      document.documentElement.style.setProperty("--bg-color", '#1E1E1E');
      document.documentElement.style.setProperty("--font-color2", "#FFF");
      document.documentElement.style.setProperty("--font-color3", "#BBB");
      document.documentElement.style.setProperty("--font-color4", "#999");
      document.documentElement.style.setProperty("--border-color", "#555");
      document.documentElement.style.setProperty("--shadow-color", "#FFFFFF20");

      let i = 0;
      driversImgs.forEach((img) => {
        img.src = `imgs/drivers/${imgsPath[i]}`;
        i++;
      });
    }
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Color Options

// Check if Color Option Exist
const liColor = document.querySelectorAll(".settings-box .color-options ul li");
const landing = document.querySelector(".landing");
let mainColor = localStorage.getItem("color");
let mainWallpaper = localStorage.getItem("wallpaper");

if (mainColor !== null) {
  document.documentElement.style.setProperty("--selector-color", localStorage.getItem("color"));
  landing.style.cssText = `background-image: url(../imgs/wallpapers/${mainWallpaper});`;

  liColor.forEach(li => {
    li.classList.remove("active");

    if (mainColor == li.getAttribute("data-color")) {
      li.classList.add("active");
    }
  });
}

// Coloring Li
liColor.forEach(li => {
  li.style.cssText = `background-color: ${li.getAttribute("data-color")}`;

  li.addEventListener("click", e => {
    document.documentElement.style.setProperty("--selector-color", e.target.getAttribute("data-color"));

    liColor.forEach(li => {
      li.classList.remove("active");
    });

    localStorage.setItem("color", e.target.getAttribute("data-color"));
    localStorage.setItem("wallpaper", e.target.getAttribute("data-wallpaper"));
    landing.style.cssText = `background-image: url(../imgs/wallpapers/${e.target.getAttribute("data-wallpaper")});`;
    e.target.classList.add("active");
  });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reset Button

const resetButton = document.querySelector(".settings-box .reset-option span");

resetButton.onclick = function () {
  this.style.cssText = `transform: scale(.95)`;
  
  localStorage.clear();
  location.reload();
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Skills Progress

const skillProgress = document.querySelectorAll(".skills .skill-box .skill-progress span");

skillProgress.forEach(span => {
  span.style.width = span.dataset.progress;
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
