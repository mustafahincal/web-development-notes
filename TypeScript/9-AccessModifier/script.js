// var Taxi = /** @class */ (function () {
//     function Taxi(location, color) {
//         this.currentLocation = location;
//         this.color = color;
//     }
//     /*
//         constructor(private location:Point , private color:string){} diyerek yukardaki tanımlamalara ve aşağıdaki
//         eşitlemelere gerek kalmaz.
//      */
//     Taxi.prototype.travelTo = function (point) {
//         console.log("taksi x: ".concat(this.currentLocation.x, " Y:").concat(this.currentLocation.y, " konumundan ").concat(point.x, " Y:").concat(point.y, " konumuna gidiyor."));
//     };
//     return Taxi;
// }());
// var taxi_3 = new Taxi({ x: 3, y: 7 });
// var taxi_4 = new Taxi({ x: 6, y: 8 }, "yellow");
// taxi_3.travelTo({ x: 7, y: 9 });