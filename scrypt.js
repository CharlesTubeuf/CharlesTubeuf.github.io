// PRELOADER
const loader = document.querySelector('.preloader');
window.addEventListener("load", () => {
    loader.classList.add('preloader--hidden');
    loader.addEventListener('transitionend', () =>{
        document.body.removeChild(loader);
    })
});

// NAVIGATION
let lastScrollTop = 0;
navbar = document.getElementById('header-nav');
window.addEventListener('scroll', function () {
    const scrollTop = window.pageTOffset ||
        this.document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-50px";
    } else {
        navbar.style.top = "0";
    }
    lastScrollTop = scrollTop;
});

// TYPED
if (window.addEventListener("load", () => {
        var typed = new Typed('#description', {
            strings: [
                "Bonjour à tous et à toutes,<br/> ^700 diplômé d'une <strong>école d'ingénieur</strong>" +
                " en biologie je suis tombé par hasard dans le <strong>développement web</strong>.<br/> ^1500" +
                " Rapidement captivé par cette discipline, j'ai décidé d'en faire mon métier.<br/> ^1500" +
                " Après plusieurs formations et <strong> une année et demie d'alternance</strong>,^800 je suis actuellement à la recherche" +
                " d'une entreprise pour développer mes compétences et exprimer ma <strong>créativité</strong>.<br/>^1500",

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
            typeSpeed: 20,
            backSpeed: 20,
            startDelay: 3500,
            onComplete(description) {
                description.cursor.remove();
            }
        });
    }));