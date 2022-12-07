// interface Point {
//     x:number;
//     y:number;
// }

// interface Vehicle{
//     currentLocation : Point;
//     travelTo(point : Point):void;
// }

// class Taxi implements Vehicle{

//     color : string;
//     currentLocation : Point;
//     constructor(location?:Point,color?:string){
//         this.currentLocation=location;
//         this.color=color;
//     }
//     travelTo(point : Point):void {
//         console.log(`taksi x: ${point.x} Y:${point.y} konumuna gidiyor.`);
//     }
// }

// let taxi_3:Taxi = new Taxi({x:3,y:7},"red");
//* color'ın optionel olarak tanımlanmasını istersem; color?:string demem gerekir.
// let taxi_3:Taxi = new Taxi({x:3,y:7});
// let taxi_4:Taxi=new Taxi({x:6,y:8},"yellow");

// taxi_1.travelTo({x:1,y:2});
// taxi_1.currentLocation={x:4,y:3};
// console.log(taxi_1.currentLocation.x);
// console.log(taxi_1.currentLocation.y);