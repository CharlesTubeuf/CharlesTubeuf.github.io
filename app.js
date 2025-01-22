//#region                   PRELOADER
const loader = document.querySelector(".preloader");
window.addEventListener("load", () => {
  loader.classList.add("preloader--hidden");
  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});
//#endregion

//#region                   NAVIGATION
document.addEventListener("click", function (event) {
  var checkbox = document.getElementById("navigationCheckbox");
  var target = event.target;
  var excludedSelectors = [".navigation"];
  var isExcluded = excludedSelectors.some(function (selector) {
    return target.matches(selector) || target.closest(selector);
  });
  if (!isExcluded || (target.id == "closeNav") ) {
    checkbox.checked = false;
  }
});
//#endregion

//#region                   TYPED
if (
  window.addEventListener("load", () => {
    var typed = new Typed("#description", {
      strings: [
        "Bonjour à toutes et à tous,<br/> ^700 diplômé d'une <strong style='color: #01b2aa;'>école d'ingénieur</strong>" +
          " en biologie j'ai découvert le <strong style='color: #01b2aa;'>développement web</strong>.<br/> ^800" +
          " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> ^800" +
          " Après plusieurs formations et <strong style='color: #01b2aa;'> quelques expériences professionnelles</strong>,^800" + 
          " j'ai découvert une réelle appétence pour l'<strong style='color: #01b2aa;'>UI/UX</strong> et la satisfaction" +
          " de produire du <strong style='color: #01b2aa;'>clean code</strong>. <br/> ^800" + 
          " A mon arrivé sur un projet je n'hésite pas a de poser des questions et je suis ravi de pouvoir aider à mon tour !<br/> ^800" +
          " Je souhaite intégrer une entreprise qui valorise le <strong style='color: #01b2aa;'>craftsmanship</strong> ^500" + 
          " et <strong style='color: #01b2aa;'>la veille documentaire</strong> afin de favoriser l'excellence et l'évolution de ses collaborateurs.<br/> ^800" +
          " Bienvenu sur mon cv !"
      ],
      typeSpeed: 5,
      backSpeed: 20,
      startDelay: 1500,
      cursorChar: '',
      onComplete(description) {
        description.cursor.remove();
      },
    });
  })
);

//#endregion

//#region                   SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      if (entry.target.classList.contains("skill")) {
        var rounds = entry.target.querySelectorAll(".round");
        rounds.forEach((round) => {
          var roundCircle = round.querySelector("circle");
          var roundRadius = roundCircle.getAttribute("r");
          var roundPercent = round.dataset.percent;
          var roundCircum = 2 * roundRadius * Math.PI;
          var roundDraw = (roundPercent * roundCircum) / 100;
          round.style.strokeDasharray = roundDraw + " 9999";
        });
      }
    }
  });
});
const hiddenElements = document.querySelectorAll(
  ".hiddenLeft , .hiddenRight , .hiddenScale"
);
hiddenElements.forEach((el) => observer.observe(el));

//#endregion

//#region                   HOBBIES ANIMATION
var activetravel = function () {
  var active = document.querySelectorAll(".active-travel");
  active.forEach((e) => {
    e.classList.remove("active-travel");
  });
  this.classList.add("active-travel");
};

const cards = document.querySelectorAll(".sport-card");
cards.forEach((card) => {
  var clip = card.querySelector(".sport-clip");
  var description = card.querySelector(".mouse-detector");

  description.addEventListener("mouseenter", function (e) {
    clip.play();
    clip.classList.add("clip-hover");
  });
  description.addEventListener("mouseout", function (e) {
    if (!clip.classList.contains("active-clip")) {
      clip.pause();
    }
    clip.classList.remove("clip-hover");
  });
  description.addEventListener("click", function (e) {
    document.querySelectorAll(".active-clip").forEach((clip) => {
      clip.classList.remove("active-clip");
      clip.pause();
    });
    clip.play();
    clip.classList.add("active-clip");
  });
});

//#endregion

//#region                   background animation
//#endregion
