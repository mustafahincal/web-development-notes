interface Point {
    x:number;
    y:number;
}

interface Vehicle{
    currentLocation : Point;
    travelTo(point : Point):void;
}

class Taxi3 implements Vehicle{
    //* sadece Taxi'ye ait olacak özellkleri buraya ekleyebiliriz.
    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`taksi x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}

class Bus3 implements Vehicle{
    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`otobüs x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}

let taxi_1:Taxi3 = new Taxi3();
let taxi_2:Taxi3 = new Taxi3();

taxi_1.travelTo({x:1,y:2});
taxi_1.currentLocation={x:4,y:3};
console.log(taxi_1.currentLocation.x);
console.log(taxi_1.currentLocation.y);