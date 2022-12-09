const promise = new Promise((resolve, reject) => {
  resolve("resolve");
  console.log("hello");
});

promise
  .then((result) => result)
  .then((res) => console.log(res))
  .catch((err) => {
    console.log(err);
  });
