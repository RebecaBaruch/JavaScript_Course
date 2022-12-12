const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: b
};
showProperties(movie);

function showProperties(obj){
    for(let key in ojb)
        if(typeof obj[key] === 'string')
        console.log(key, onj[key]);
}