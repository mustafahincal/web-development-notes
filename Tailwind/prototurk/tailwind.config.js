const _ = require("lodash");
const plugin = require("tailwindcss/plugin");

module.exports = {
   content: ["./src/**/*.{html,js}"],
   darkMode: "class",
   theme: {
      extend: {
         colors: {
            twitter: "#1DA1F2",
            prototurk: "#32445A",
         },
         spacing: {
            15: "3.75rem",
         },
         fontFamily: {
            poppins: ["Poppins", "sans-serif"],
         },
      },
   },
   plugins: [
      plugin(function ({ addUtilities, theme, e }) {
         const calcUtilities = _.map(theme("spacing"), (value, key) => {
            return {
               [`.${e(`calc-h-full-${key}`)}`]: {
                  height: `calc(100% - ${value})`,
               },
               [`.${e(`calc-w-full-${key}`)}`]: {
                  width: `calc(100% - ${value})`,
               },
            };
         });

         addUtilities(calcUtilities, {
            variants: ["responsive", "hover"],
         });
      }),
   ],
};
