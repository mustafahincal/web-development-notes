import React from "react";
import { useFormik } from "formik";
import validationSchema from "./validations";

//* hatayı focus olup ayrıldıktan sonra vermek için touched'i kullandık, kullanımı daha güzel olsun diye , direkt kırmızı yanmasın diye.
//* touched'ı handleBlur ile kullanıyoruz , orada bir event geçmemiz gerekiyor çalışması için
//* hataları errors ile alıyoruz
function Signup() {
   const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
      useFormik({
         initialValues: {
            email: "",
            password: "",
            passwordConfirm: "",
         },
         onSubmit: (values) => {
            console.log(values);
         },
         validationSchema,
      });
   return (
      <div className="App">
         <h1>Sign Up</h1>
         <form onSubmit={handleSubmit}>
            <br></br>
            <br></br>

            <label htmlFor="email">Email</label>
            <input
               name="email"
               value={values.email}
               onChange={handleChange}
               onBlur={handleBlur}
            />

            {errors.email && touched.email && (
               <div style={{ color: "red" }}>{errors.email}</div>
            )}

            <br></br>
            <br></br>

            <label htmlFor="password">Password</label>
            <input
               name="password"
               value={values.password}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            {errors.password && touched.password && (
               <div style={{ color: "red" }}>{errors.password}</div>
            )}

            <br></br>
            <br></br>

            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
               name="passwordConfirm"
               value={values.passwordConfirm}
               onChange={handleChange}
               onBlur={handleBlur}
            />
            {errors.passwordConfirm && touched.passwordConfirm && (
               <div style={{ color: "red" }}>{errors.passwordConfirm}</div>
            )}

            <br></br>
            <br></br>

            <button type="submit">Submit</button>
            <br></br>
            <code>{JSON.stringify(values)}</code>
         </form>
      </div>
   );
}

export default Signup;
