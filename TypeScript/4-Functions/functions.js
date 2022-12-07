// function getAverage(a, b, c) {
//     var result = (a + b + c) / 3;
//     return "result : " + result;
// }
// getAverage(10, 20, 30);



// function getAverage2(a, b, c) {
//     var total = a + b;
//     var count = 2;
//     if (typeof c !== "undefined") {
//         total += c;
//         count++;
//     }
//     var result = total / count;
//     return "result : " + result;
// }
// getAverage2(10, 20);



// function getAverage3() {
//     var numbers = [];
//     for (var _i = 0; _i < arguments.length; _i++) {
//         numbers[_i] = arguments[_i];
//     }
//     var total = 0;
//     var count = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         total += numbers[i];
//         count++;
//     }
//     var result = total / count;
//     return "result : " + result;
// }
// getAverage3(10, 20, 30, 50, 60);