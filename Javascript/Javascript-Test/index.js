const test = (obj) => {
  console.log(obj);
};
const tObj = {
  id: 1,
  name: "Mustafa",
  age: 16,
};
test({ ...tObj, age: 20, date: "2001" });
