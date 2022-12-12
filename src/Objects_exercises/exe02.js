let address = createAddress('a', 'b', 'c');

console.log(address);

address = new Addres('a', 'b', 'c');

console.log(address);

//Factory Function
function createAddress(street, city, zipCode){
    return{
        street,
        city,
        zipCode
    };
}

//Constructor Function
function Addres(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}