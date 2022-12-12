let address = {
    street: 'a',
    city: 'b',
    zipCode: 'c'
};

function showAdress(address){
    for(let key in address)
        console.log(key, address[key]);
}

showAdress(address);