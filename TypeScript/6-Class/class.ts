interface Point {
    x:number;
    y:number;
}

interface Vehicle{
    currentLocation : Point;
    travelTo(point : Point):void;
}

class Taxi2 implements Vehicle{
    //* sadece Taxi'ye ait olacak özellkleri buraya ekleyebiliriz.
    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`taksi x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}

class Bus2 implements Vehicle{
    currentLocation : Point;
    travelTo(point : Point):void {
        console.log(`otobüs x: ${point.x} Y:${point.y} konumuna gidiyor.`);
    }
}