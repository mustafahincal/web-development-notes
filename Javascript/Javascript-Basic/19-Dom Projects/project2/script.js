const models = [{
        name: "Bmw 418d",
        image: "img/bmw.jpg",
    },
    {
        name: "Mazda CX-3",
        image: "img/mazda.jpg",
    },
    {
        name: "Volvo s60",
        image: "img/volvo.jpg",
    },
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
    }
]

const image = document.querySelector(".card-img-top");
const title = document.querySelector(".card-title");
const buttonLeft = document.querySelector(".fa-arrow-circle-left");
const buttonRight = document.querySelector(".fa-arrow-circle-right");
const icons = document.querySelectorAll(".arrow");
let index = 0;
var settings = {
    duration: "1000",
    random: true
};
var interval;

init(settings);


buttonLeft.addEventListener("click", function() {
    index--;
    changeSlide(index);
})

buttonRight.addEventListener("click", function() {
    index++;
    changeSlide(index);
})

icons.forEach(function(item) {
    item.addEventListener("mouseenter", function() {
        clearInterval(interval);
    })
});

icons.forEach(function(item) {
    item.addEventListener("mouseleave", function() {
        init(settings);
    })
})

function init(settings) {

    var prev;
    interval = setInterval(function() {
        if (settings.random) {
            do {
                index = Math.floor(Math.random() * models.length);
            } while (index == prev)
            prev = index;
        } else {
            index++;
        }
        changeSlide(index);
    }, settings.duration)

}

function changeSlide(i) {

    index = i;

    if (index <= -1) {
        index = models.length - 1;
    } else if (index >= models.length) {
        index = 0;
    }
    image.setAttribute("src", models[index].image);
    title.textContent = models[index].name;
}