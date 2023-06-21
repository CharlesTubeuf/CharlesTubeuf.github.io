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
                "Bonjour à tous et à toutes,<br/> ^700 diplômé d'une <strong>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong>développement web</strong>.<br/> ^800" +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> ^800" +
                " Après plusieurs formations et <strong> une année et demie d'alternance</strong>,^800 je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong>créativité</strong>.<br/>^800",

                "Bonjour à tous et à toutes,<br/>  diplômé d'une <strong>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong>développement web</strong>.<br/> " +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> " +
                " Après plusieurs formations et <strong> une année et demie d'alternance</strong>, je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong>créativité</strong>.<br/>" +
                " Cette animation est réalisée via la library typed.js, merci Matt Boldt.^2000",

                "Bonjour à tous et à toutes,<br/>  diplômé d'une <strong>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong>développement web</strong>.<br/> " +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> " +
                " Après plusieurs formations et <strong> une année et demie d'alternance</strong>, je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong>créativité</strong>.<br/>" +
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

function random($min, $max) {
    return random() * ($max - $min) + $min;
}

function randomColor() {
    return random(0, 16777215).floor().toNumber().toString(16);
}
//#endregion

//#region                   SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.hiddenLeft , .hiddenRight');
hiddenElements.forEach((el) => observer.observe(el));
//#endregion

//#region                   3D animation



//#endregion         