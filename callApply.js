// bind call and apply methods are useally used to bring a method (function in object) from another object and use it into another object

const ReciptionBill = {
    chargeBill : function(tax_Amount){
        this.bill = this.bill + tax_Amount;
    }
}

const Person1 = {
    name : "Abdur Rahman",
    bill : 150
}

// bind method
// const makeTheBill = ReciptionBill.chargeBill.bind(Person1); // return a function..
// makeTheBill(15); // added tax_amount 
// console.log(Person1.bill);

// call method
// ReciptionBill.chargeBill.call(Person1,15);
// console.log(Person1.bill);

// apply method
// ReciptionBill.chargeBill.apply(Person1,[15]);
// console.log(Person1.bill);
