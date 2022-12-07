import {Taxi} from "./taxi"




let taxi_3:Taxi = new Taxi({x:3,y:7});
let taxi_4:Taxi=new Taxi({x:6,y:8},"yellow");

taxi_3.travelTo({x:7,y:9});
let currentlo = taxi_3.location;
taxi_3.location={x:7,y:8};
