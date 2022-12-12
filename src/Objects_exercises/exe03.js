let address1 = new Addres('a', 'b', 'c');
let address2 = new Addres('a', 'b', 'c');

console.log(areEqual(address1, address2));
console.log(areSame(address1, address2));


//Constructor Function
function Addres(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

function areEqual(address1, address2){
    return address1.street === address2.street &&
        address1.city === address2.city &&
        address1.zipCode === address2.zipCode;
}

function areSame(adress1, adress2){
    return address1 === address2;
}