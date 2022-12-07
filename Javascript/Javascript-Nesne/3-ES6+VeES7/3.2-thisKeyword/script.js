//* ES5
let list1 = {
    category: "phone",
    names: ["Iphone 8", "Samsung S8", "Iphone 7"],
    call: function() {
        var self = this;
        this.names.map(function(name) {
            console.log(`${self.category} ${name}`);
            //* burda ayrı bir fonksiyonun içine girdiğimizden dolayı this.category dersek undefined döner.Bunu düzeltmek için list'in adresini bir değişkene atarız.(self)
        })
    }
}

// list.call();

//* ES6

let list2 = {
    category: "phone",
    names: ["Iphone 8", "Samsung S8", "Iphone 7"],
    call: function() {
        this.names.map((name) => {
            console.log(`${this.category} ${name}`);
            //* Arrow Functions yeni bir scope oluşturmaz. This'i kullanabiliriz.
        })
    }
}

//list2.call();

//* ES5
function Game1() {
    this.live = 0;
    this.addLive = function() {
        var self = this;
        this.OneUp = setInterval(function() {
            console.log(++self.live);
        }, 1000)
    }
}

let player1 = new Game1();
//player1.addLive();

//* ES6

function Game2() {
    this.live = 0;
    this.addLive = function() {
        this.OneUp = setInterval(() => {
            console.log(++this.live);
        }, 1000)
    }
}

let player2 = new Game2();
player2.addLive();