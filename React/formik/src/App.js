import "./App.css";
import { useFormik } from "formik";
// import { Formik } from "formik";

//* En Temiz hali, içerisindeki o callback'i useFormik kullanarak kaldırıyoruz.
//* Burada Formik componentine bile gerek kalmıyor artık cok daha temiz.
function App() {
   // const Formik = useFormik({});
   // Formik.handleChange
   // Formik.handleSubmit
   // Formik.values
   // diye erişebilirim eğer Formik diye tanımlarsam.

   const { handleSubmit, handleChange, values } = useFormik({
      initialValues: {
         firstName: "deneme",
         lastName: "",
         email: "@gmail",
         gender: "male",
         hobbies: [],
         country: "",
      },
      onSubmit: (values) => {
         console.log(values);
      },
   });
   return (
      <div className="App">
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First Name</label>
            <input
               name="firstName"
               value={values.firstName}
               onChange={handleChange}
            />

            <br></br>
            <br></br>

            <label htmlFor="lastName">Last Name</label>
            <input
               id="lastName"
               name="lastName"
               onChange={handleChange}
               value={values.lastName}
            />

            <br></br>
            <br></br>

            <label htmlFor="email">Email</label>
            <input name="email" value={values.email} onChange={handleChange} />

            <br></br>
            <br></br>

            <span>Male</span>
            <input
               type="radio"
               name="gender"
               value="male"
               onChange={handleChange}
               checked={values.gender === "male"}
            ></input>
            <span>Female</span>
            <input
               type="radio"
               name="gender"
               value="female"
               onChange={handleChange}
            ></input>

            <br></br>
            <br></br>

            <div>
               <span>Football</span>
               <input
                  type="checkbox"
                  name="hobbies"
                  value="Football"
                  onChange={handleChange}
               ></input>
            </div>
            <div>
               <span>Cinema</span>
               <input
                  type="checkbox"
                  name="hobbies"
                  value="Cinema"
                  onChange={handleChange}
               ></input>
            </div>
            <div>
               <span>Photograpy</span>
               <input
                  type="checkbox"
                  name="hobbies"
                  value="Photograpy"
                  onChange={handleChange}
               ></input>
            </div>

            <br></br>
            <br></br>

            <button type="submit">Submit</button>

            <br></br>
            <br></br>

            <select
               name="country"
               onChange={handleChange}
               value={values.country}
            >
               <option value="tr">Turkey</option>
               <option value="en">England</option>
               <option value="usa">USA</option>
            </select>

            <br></br>
            <code>{JSON.stringify(values)}</code>
         </form>
      </div>
   );
}

export default App;

//* Formik ana şeması diyebiliriz.
// function App() {
//    return (
//       <div className="App">
//          <h1>Sign Up</h1>
//          <Formik
//             initialValues={{
//                firstName: "",
//                lastName: "",
//                email: "",
//             }}
//             onSubmit={(values) => {
//                alert(values);
//             }}
//          >
//             <Form>
//                <label htmlFor="firstName">First Name</label>
//                <Field id="firstName" name="firstName" placeholder="Jane" />

//                <br></br>
//                <br></br>

//                <label htmlFor="lastName">Last Name</label>
//                <Field id="lastName" name="lastName" placeholder="Doe" />

//                <br></br>
//                <br></br>

//                <label htmlFor="email">Email</label>
//                <Field
//                   id="email"
//                   name="email"
//                   placeholder="jane@acme.com"
//                   type="email"
//                />

//                <br></br>
//                <br></br>

//                <button type="submit">Submit</button>
//             </Form>
//          </Formik>
//       </div>
//    );
// }

//* bazı durumlarda özelleştirmeye ihtiyacımız olabilir, o zaman aşağıdaki yapıyı tasarlayabiliriz.
// function App() {
//    return (
//       <div className="App">
//          <h1>Sign Up</h1>
//          <Formik
//             initialValues={{
//                firstName: "",
//                lastName: "",
//                email: "",
//             }}
//             onSubmit={(values) => {
//                console.log(values);
//             }}
//          >
//             {({ handleChange, handleSubmit }) => (
//                <form onSubmit={handleSubmit}>
//                   <label htmlFor="firstName">First Name</label>
//                   <input name="firstName" onChange={handleChange} />

//                   <br></br>
//                   <br></br>

//                   <label htmlFor="lastName">Last Name</label>
//                   <input
//                      id="lastName"
//                      name="lastName"
//                      onChange={handleChange}
//                   />

//                   <br></br>
//                   <br></br>

//                   <label htmlFor="email">Email</label>
//                   <input name="email" onChange={handleChange} />

//                   <br></br>
//                   <br></br>

//                   <button type="submit">Submit</button>
//                </form>
//             )}
//          </Formik>
//       </div>
//    );
// }

//* checkbox, radio ve dropdown menu ile kullanımı;
// function App() {
//    return (
//       <div className="App">
//          <h1>Sign Up</h1>
//          <Formik
//             initialValues={{
//                firstName: "deneme",
//                lastName: "",
//                email: "@gmail",
//                gender: "male",
//                hobbies: [],
//                country: "",
//             }}
//             onSubmit={(values) => {
//                console.log(values);
//             }}
//          >
//             {({ handleChange, handleSubmit, values }) => (
//                <form onSubmit={handleSubmit}>
//                   <label htmlFor="firstName">First Name</label>
//                   <input
//                      name="firstName"
//                      value={values.firstName}
//                      onChange={handleChange}
//                   />

//                   <br></br>
//                   <br></br>

//                   <label htmlFor="lastName">Last Name</label>
//                   <input
//                      id="lastName"
//                      name="lastName"
//                      onChange={handleChange}
//                      value={values.lastName}
//                   />

//                   <br></br>
//                   <br></br>

//                   <label htmlFor="email">Email</label>
//                   <input
//                      name="email"
//                      value={values.email}
//                      onChange={handleChange}
//                   />

//                   <br></br>
//                   <br></br>

//                   <span>Male</span>
//                   <input
//                      type="radio"
//                      name="gender"
//                      value="male"
//                      onChange={handleChange}
//                      checked={values.gender === "male"}
//                   ></input>
//                   <span>Female</span>
//                   <input
//                      type="radio"
//                      name="gender"
//                      value="female"
//                      onChange={handleChange}
//                   ></input>

//                   <br></br>
//                   <br></br>

//                   <div>
//                      <span>Football</span>
//                      <input
//                         type="checkbox"
//                         name="hobbies"
//                         value="Football"
//                         onChange={handleChange}
//                      ></input>
//                   </div>
//                   <div>
//                      <span>Cinema</span>
//                      <input
//                         type="checkbox"
//                         name="hobbies"
//                         value="Cinema"
//                         onChange={handleChange}
//                      ></input>
//                   </div>
//                   <div>
//                      <span>Photograpy</span>
//                      <input
//                         type="checkbox"
//                         name="hobbies"
//                         value="Photograpy"
//                         onChange={handleChange}
//                      ></input>
//                   </div>

//                   <br></br>
//                   <br></br>

//                   <button type="submit">Submit</button>

//                   <br></br>
//                   <br></br>

//                   <select
//                      name="country"
//                      onChange={handleChange}
//                      value={values.country}
//                   >
//                      <option value="tr">Turkey</option>
//                      <option value="en">England</option>
//                      <option value="usa">USA</option>
//                   </select>

//                   <br></br>
//                   <code>{JSON.stringify(values)}</code>
//                </form>
//             )}
//          </Formik>
//       </div>
//    );
// }
