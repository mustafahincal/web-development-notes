module.exports = {
   content: ["./src/**/*.{html,js}"],
   theme: {
      extend: {
         colors: {
            primary: "#ff6363",
            secondary: {
               100: "#e2e2d5",
               200: "#888883",
            },
         },
         fontSize: {
            newFontSize: "20rem",
         },
         fontFamily: {
            body: ["Poppins", "sans-serif"],
            // body: "Poppins",
         },
      },
   },
   plugins: [],
};

// eğer ben değişikleri neye göre yapacağımı bilmek istersem yani color için colors : {} mı yapacağım?
// npx tailwindcss init deyince tailwind.config dosyasını oluşturur yukarda gördüğümüz ,
// ancak npx tailwindcss init --full dersek var olan kodları da getirir, orda nasıl uygulandığını görüp sonra yapabilirim.
