// Call,Apply,Bind

var welcome = function(a, b) {
    console.log("Welcome " + this.name + ".Are you interested in " + a + " and " + b);
}

welcome(); //! Welcome .Are you interested in undefined and undefined

var yigit = { name: "Yiğit" };
var mustafa = { name: "Mustafa" };

welcome.call(yigit, "asp.net", "angular"); //! Welcome Yiğit.Are you interested in asp.net and angular
welcome.call(mustafa, "java", "spring"); //! Welcome Mustafa.Are you interested in java and spring

welcome.apply(yigit, ["asp.net", "angular"]); //! Welcome Yiğit.Are you interested in asp.net and angular
welcome.apply(mustafa, ["java", "spring"]); //! Welcome Mustafa.Are you interested in java and spring

//? apply ve call methodunun genel olarak kullanımı aynıdır. Başka veriler göndereceğimiz zaman ufak farklılık vardır.

welcomeYigit = welcome.bind(yigit);
welcomeYigit("asp.net", "angular"); //! Welcome Yiğit.Are you interested in asp.net and angular

welcomeMustafa = welcome.bind(mustafa);
welcomeMustafa("java", "spring"); //! Welcome Mustafa.Are you interested in java and spring