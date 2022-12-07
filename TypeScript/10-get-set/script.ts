// interface Point {
//     x:number;
//     y:number;
// }

//* burdaki get set java'da yaptığımız gibi , javascript'teki properties kullanarak biraz farklı da yapabiliyoruz.

// interface Vehicle{
//     travelTo(point : Point):void;
// }

// class Taxi implements Vehicle{
    
//     private color : string;   
//     private currentLocation : Point;
//     constructor(location?:Point,color?:string){
//         this.currentLocation=location;
//         this.color=color;
//     }
//     travelTo(point : Point):void {
//         console.log(`taksi x: ${this.currentLocation.x} Y:${this.currentLocation.y} konumundan X:${point.x} Y:${point.y} konumuna gidiyor.`);
//     }
//     getLocation(){
//         return this.currentLocation;
//     }
//     public setLocation(value:Point){
//         if(value.x<0){
//             throw new Error("Kordinat bilgileri negatif olamaz");
//         }else{
//             this.currentLocation=value;
//         }
//     }
// }


// let taxi_3:Taxi = new Taxi({x:3,y:7});
// let taxi_4:Taxi=new Taxi({x:6,y:8},"yellow");

// taxi_3.travelTo({x:7,y:9});
// let currentlo = taxi_3.getLocation();
// taxi_3.setLocation({x:5,y:8});
