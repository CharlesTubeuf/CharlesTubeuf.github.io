//#region                   PRELOADER
const loader = document.querySelector('.preloader');
window.addEventListener("load", () => {
    loader.classList.add('preloader--hidden');
    loader.addEventListener('transitionend', () => {
        document.body.removeChild(loader);
    })
});
//#endregion

//#region                   NAVIGATION
document.addEventListener('click', function (event) {
    var checkbox = document.getElementById('navigationCheckbox');
    var target = event.target;
    var excludedSelectors = ['.navigation', ];
    var isExcluded = excludedSelectors.some(function (selector) {
        return target.matches(selector) || target.closest(selector);
    });

    if (!isExcluded) {
        checkbox.checked = false;
    }
});
//#endregion

//#region                   TYPED
if (window.addEventListener("load", () => {
        var typed = new Typed('#description', {
            strings: [
                "Bonjour à tous et à toutes,<br/> ^700 diplômé d'une <strong style='color: #01b2aa;'>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong style='color: #01b2aa;'>développement web</strong>.<br/> ^800" +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> ^800" +
                " Après plusieurs formations et <strong style='color: #01b2aa;'> une année et demie d'alternance</strong>,^800 je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong style='color: #01b2aa;'>créativité</strong>.<br/>^800",

                "Bonjour à tous et à toutes,<br/>  diplômé d'une <strong style='color: #01b2aa;'>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong style='color: #01b2aa;'>développement web</strong>.<br/> " +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> " +
                " Après plusieurs formations et <strong style='color: #01b2aa;'> une année et demie d'alternance</strong>, je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong style='color: #01b2aa;'>créativité</strong>.<br/>" +
                " Cette animation est réalisée via la library typed.js, merci Matt Boldt.^2000",

                "Bonjour à tous et à toutes,<br/>  diplômé d'une <strong style='color: #01b2aa;'>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong style='color: #01b2aa;'>développement web</strong>.<br/> " +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> " +
                " Après plusieurs formations et <strong style='color: #01b2aa;'> une année et demie d'alternance</strong>, je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong style='color: #01b2aa;'>créativité</strong>.<br/>" +
                " Bienvenu sur mon cv !",
            ],
            typeSpeed: 10,
            backSpeed: 20,
            startDelay: 1500,
            onComplete(description) {
                description.cursor.remove();
            }
        });
    }));

//#endregion

//#region                   SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            if (entry.target.classList.contains('skill')) {

                var rounds = entry.target.querySelectorAll(".round");
                rounds.forEach(round => {
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
const hiddenElements = document.querySelectorAll('.hiddenLeft , .hiddenRight , .hiddenScale');
hiddenElements.forEach((el) => observer.observe(el));

//#endregion


//#region                   background animation
//#endregion         