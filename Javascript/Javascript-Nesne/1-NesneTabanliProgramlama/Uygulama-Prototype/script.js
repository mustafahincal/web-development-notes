//* Demo : Creating Objects

let Employee = function(name, salary) {

    //? gelen nesne Employee tipinde değilse ;
    if (!(this instanceof Employee)) {
        return new Employee(name, salary);
    }

    this.name = name;
    this.salary = salary;
}

//* bu methodu constructor içinde de oluşturabilirim ancak türettiğimiz her nesne için neden bir method oluşsun. Sadece bir tane olması ve Employee'ye hizmet etmesi en mantıklı olan. O yüzden prototype içine tanımlarız.

Employee.prototype.calculateSalary = function() {
    var month = new Date().getMonth() + 10;
    var tax = 0,
        total = this.salary * month;

    if (total > 20000 && total < 30000) {
        tax = total * (25 / 100);
    } else if (total > 30000) {
        tax = total * (30 / 100);
    } else {
        tax = total * (20 / 100);
    }

    return {
        tax: tax,
        paid: total - tax
    }
}


let emp1 = Employee("Mustafa", 3000); //? new koymazsak hata verir ama constructor içini güncellersek bunu düzeltebiliriz.
console.log(emp1);
console.log(emp1.calculateSalary());
console.log(emp1.calculateSalary().tax);
console.log(emp1.calculateSalary().paid);

console.log(`${emp1.name} isimli personel toplam ${emp1.calculateSalary().tax} vergi kesintisi ile aldığı toplam maaş ${emp1.calculateSalary().paid}`);

let emp2 = new Employee("Ali", 1000);
console.log(emp2);
console.log(emp2.calculateSalary());
console.log(emp2.calculateSalary().tax);
console.log(emp2.calculateSalary().paid);

console.log(`${emp2.name} isimli personel toplam ${emp2.calculateSalary().tax} TL vergi kesintisi ile aldığı toplam maaş ${emp2.calculateSalary().paid} TL`);