//* export dediğimiz zaman artık Taxi sınıfını Taxi.ts dosyası dışında da kullanabiliriz.
import { Point } from "./point";
import { Vehicle } from "./vehicle";
export class Taxi implements Vehicle{
    
    private color : string;   
    private currentLocation : Point;
    constructor(location?:Point,color?:string){
        this.currentLocation=location;
        this.color=color;
    }
    travelTo(point : Point):void {
        console.log(`taksi x: ${this.currentLocation.x} Y:${this.currentLocation.y} konumundan X:${point.x} Y:${point.y} konumuna gidiyor.`);
    }
    get location(){
        return this.currentLocation;
    }
    set location(value:Point){
        if(value.x<0){
            throw new Error("Kordinat bilgileri negatif olamaz");
        }else{
            this.currentLocation=value;
        }
    }
}