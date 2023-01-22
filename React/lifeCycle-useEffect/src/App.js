import { useState } from "react";
import Counter from "./components/Counter";
function App() {
   const [isVisible, setIsVisible] = useState(true);

   return (
      <>
         {isVisible && <Counter />}
         <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
      </>
   );
   //* Counter componentinde setInterval ile sürekli artan bir number değeri var , biz burda dom'dan kaldırınca da artmak istiyor çünkü asenkron bir işlem ancak hata veriyor . Bunu düzeltmemiz lazım.
   //* return () => console.log("component unmount edildi") ifadesiyle componentin dom'dan kaldırılması yani unmount işlemini yakalıyorum.
   //* o asenkron işlemi durduracağım zaman yani unmount işlemi olduktan sonra , setInterval çalışmasını durdurmak için clearInterval kullanıyoruz.
}

export default App;
