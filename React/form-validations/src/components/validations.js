import * as yup from "yup";

let validations = yup.object().shape({
   email: yup.string().email("Geçerli bir email girin").required(),
   password: yup
      .string()
      .min(5, "Parolanız en az 5 karakter olmalıdır ")
      .required("Zorunlu Alan"),
   passwordConfirm: yup
      .string()
      .oneOf([yup.ref("password")], "Parolalar uyuşmuyor")
      .required(),
});

export default validations;

//* default olan hata mesajlarını biz özelleştirebiliriz.
