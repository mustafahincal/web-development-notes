function App() {
  return <div className="App">React - TypeScript Demo</div>;
}

export default App;

//? --------------------------------

const name: string = "Mustafa Hıncal";
const age: number = 29;
const isValid: boolean = true;
const test1: any = "test"; //* if i cant give a specific type, i just give any
const test2: number | string = 5;

//? --------------------------------

type ObjType1 = {
  name: string;
  age: number;
  done?: boolean; //* ? -> optional, if i dont wanna be done value in some objects, i should make it optional otherwise i get error
};

const objTest1: ObjType1 = {
  name: "Mustafa",
  age: 20,
  done: true,
};

//? --------------------------------

type ObjType2 = {
  name: string;
  age: number;
  done?: boolean;
};

//* differences of ObjType1 and ObjType2 only accept value. we can use like that;
type ObjType3 = {
  /* name: string;
  age: number;
  done?: boolean; */
  accept?: boolean;
};

//* just need to think like inheritance
type ObjTypeMain = ObjType2 & ObjType3;

const objTest2: ObjTypeMain = {
  name: "Mustafa",
  age: 20,
  done: true,
};

//? --------------------------------

//* inheritance with interfaces
interface Obj1 {
  name: string;
  age: number;
  done?: boolean;
}

interface Obj2 {
  accept?: boolean;
}

interface ObjMain extends Obj1, Obj2 {}

const obj: ObjMain = {
  name: "Mustafa",
  age: 20,
  done: true,
};
