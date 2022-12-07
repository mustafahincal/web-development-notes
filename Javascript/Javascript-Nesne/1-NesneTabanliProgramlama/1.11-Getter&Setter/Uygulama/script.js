function CustomTimer() {
    var startTime = null;
    var endTime = null;
    var isRunning = false;
    var time = 0;

    this.start = function() {
        if (isRunning) {
            return;
        }
        startTime = new Date();
        isRunning = true;
    }

    this.stop = function() {
        if (!isRunning) {
            return "hey";
        }
        endTime = new Date();
        isRunning = false;
        time = (endTime - startTime) / 1000;
    }
    this.reset = function() {
        startTime = null;
        endTime = null;
        time = 0;
        isRunning = false;
    }

    Object.defineProperty(this, "time", {
        get: function() {
            return time;
        },
        set: function(value) {
            if (value < 0) {
                throw new Error("Time cannot be negative");
            } else if (typeof value != "number") {
                throw new Error("Please enter just number");
            }
            time = value;
        }
    })
}



let myTimer = new CustomTimer();
console.log(myTimer);


//* alanları var ile tanımlayınca constructor dışında kullanamıyorum. O yüzden fonksiyonları da constructor içine aldım.
// class CustomTimer {
//     constructor() {
//         var startTime = null;
//         var endTime = null;
//         var isRunning = false;
//         var time = 0;

//         this.start = function() {
//             if (isRunning) {
//                 return;
//             }
//             startTime = new Date();
//             isRunning = true;
//         }

//         this.stop = function() {
//             if (!isRunning) {
//                 return "hey";
//             }
//             endTime = new Date();
//             isRunning = false;
//             time = (endTime - startTime) / 1000;
//         }
//         this.reset = function() {
//             startTime = null;
//             endTime = null;
//             time = 0;
//             isRunning = false;
//         }

//          Object.defineProperty(this, "time", {
//             get: function() {
//                 return time;
//             },
//             set: function(value) {
//                 if (value < 0) {
//                     throw new Error("Time cannot be negative");
//                 }
//                 time = value;
//             }
//         })
//     }

// }

// let myTimer = new CustomTimer();


//* normal bir class yapısıyla yaparsak , hepsi public olursa;
// class CustomTimer {
//     constructor() {
//         this.startTime = null;
//         this.endTime = null;
//         this.isRunning = false;
//         this.time = 0;
//     }
//     start() {
//         if (this.isRunning) {
//             return;
//         }
//         this.startTime = new Date();
//         this.isRunning = true;
//     }
//     stop() {
//         if (!this.isRunning) {
//             return "what?";
//         }
//         this.endTime = new Date();
//         this.isRunning = false;
//         this.time = (this.endTime - this.startTime) / 1000;
//     }
//     reset() {
//         this.startTime = null;
//         this.endTime = null;
//         this.time = 0;
//         this.isRunning = false;
//     }
// }

// let myTimer = new CustomTimer();
// console.log(myTimer);