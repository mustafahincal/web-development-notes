// interface Point {
//     x:number;
//     y:number;
// }

// interface Vehicle{
//     travelTo(point : Point):void;
// }

// class Taxi implements Vehicle{
//     //* public desekte demesekte default olarak public algılanır ve dışardan erişebiliriz.
//     //* private dersek direk erişemem bir method ile erişebilirim.
//     private color : string;   
//     private currentLocation : Point;
//     constructor(location?:Point,color?:string){
//         this.currentLocation=location;
//         this.color=color;
//     }
//     /*
//         constructor(private location:Point , private color:string){} diyerek yukardaki tanımlamalara ve aşağıdaki
//         eşitlemelere gerek kalmaz.
//      */
//     travelTo(point : Point):void {
//         console.log(`taksi x: ${this.currentLocation.x} Y:${this.currentLocation.y} konumundan X:${point.x} Y:${point.y} konumuna gidiyor.`);
//     }
// }


// let taxi_3:Taxi = new Taxi({x:3,y:7});
// let taxi_4:Taxi=new Taxi({x:6,y:8},"yellow");

// taxi_3.travelTo({x:7,y:9});

