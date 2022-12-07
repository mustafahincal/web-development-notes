const getHash = () => window.location.hash || "#about";
const hashActive = () => {
    [...document.querySelectorAll("a.link")]
    .map(link => {
            link.classList.remove("active");
            return link;
        })
        .find(link => link.hash === getHash())
        .classList.add("active");
}

window.addEventListener("hashchange", hashActive);
hashActive();