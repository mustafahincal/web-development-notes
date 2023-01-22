import { IntlProvider, FormattedMessage } from "react-intl";
import { useEffect, useState } from "react";

const messages = {
   "tr-TR": {
      title: "Merhaba Dünya ",
      description: "{count} yeni mesajınız var",
   },
   "en-US": {
      title: "Hello World",
      description: "You have {count} new messages",
   },
};

function App() {
   //  const isLocale = localStorage.getItem("locale");
   //  const defaultLocale = isLocale ? isLocale : navigator.language;
   const [locale, setLocale] = useState("tr-TR");

   useEffect(() => {
      const lang = localStorage.getItem("locale");
      if (lang) setLocale(lang);
   }, []);

   useEffect(() => {
      localStorage.setItem("locale", locale);
   }, [locale]);

   return (
      <div className="App">
         <IntlProvider locale={locale} messages={messages[locale]}>
            <FormattedMessage id="title" />

            <br />

            <FormattedMessage id="description" values={{ count: 3 }} />

            <br />
            <br />

            <button onClick={() => setLocale("tr-TR")}>TR</button>
            <button onClick={() => setLocale("en-US")}>EN</button>
         </IntlProvider>
      </div>
   );
}

export default App;
