import "./App.css";
import { useFormik } from "formik";
import Signup from "./components/Signup";

//* Form Validation işlemleri için yupjs kullanıyoruz, npm install yup diyerek indiriyoruz.

function App() {
   return (
      <div>
         <Signup />
      </div>
   );
}

export default App;
