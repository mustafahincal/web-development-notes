//* Demo : Numeric Range

// var num = {
//     min: 0,
//     max: 100,
//     checkNumericRange: function(value) {
//         if (typeof value !== "number") {
//             return false;
//         } else {
//             return value >= this.min && value <= this.max;
//         }
//     }
// }

// console.log(num.checkNumericRange(20));
// console.log(num.checkNumericRange(-20));

//******************************* */

// var num = {
//     min: 0,
//     max: 100,
//     checkNumericRange: function(value) {
//         if (typeof value !== "number") {
//             return false;
//         } else {
//             return value >= this.min && value <= this.max;
//         }
//     }
// }

// var num1 = {
//     min: 50,
//     max: 60,
// }

// console.log(num.checkNumericRange.call(num1, 40)); //! false
// console.log(num.checkNumericRange.call(num1, 55)); //! true

// console.log(num.checkNumericRange.apply(num1, [52])); //! true

// checkNumericRangeNew = num.checkNumericRange.bind(num1);
// console.log(checkNumericRangeNew(50)); //! true

//******************************* */

var num = {
    checkNumericRange: function(value) {
        if (typeof value !== "number") {
            return false;
        } else {
            return value >= this.min && value <= this.max;
        }
    }
}

var num1 = {
    min: 50,
    max: 60,
}

console.log(num.checkNumericRange.call(num1, 40)); //! false
console.log(num.checkNumericRange.call(num1, 55)); //! true

console.log(num.checkNumericRange.apply(num1, [52])); //! true

checkNumericRangeNew = num.checkNumericRange.bind(num1);
console.log(checkNumericRangeNew(50)); //! true