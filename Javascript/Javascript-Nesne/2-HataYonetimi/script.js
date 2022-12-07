//* Reference Error
//* TypeError
//* SyntaxError
//* URIError

//* Error


try {
    console.log(myFunction());
} catch (e) {
    console.log(e); //! ReferenceError: myFunction is not defined at script.js: 4: 13
    console.log(e.message); //! myFunction is not defined
    console.log(e.name); //! ReferenceError
    console.log(e instanceof ReferenceError); //! true
    console.log(e instanceof TypeError) //! false
    console.log(typeof e); //! object
}

//? Kendi hatamızı üretebiliriz;

var user = {
        name: "Sadık Turan"
    }
    // user object'inin name adında bir alanı var , ben email alanına erişmek istersem : hata vermez undefined der. Ama ben hata attırmak istiyorum.

try {
    console.log(user.name);
    if (!user.email) {
        throw new Error("User has no email");
    }
} catch (e) {
    console.log(e);
    console.log(e.message);
    console.log(e.name);
    console.log(e instanceof ReferenceError);
    console.log(e instanceof TypeError)
    console.log(typeof e);
} finally {
    console.log("finally block");
}