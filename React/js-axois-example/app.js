import getData from "./index.js";

(async () => {
   const info = await getData(3);
   console.log(info);
})();
