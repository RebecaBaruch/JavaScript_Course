showNumbers(10);

function showNumbers(limit){
    for(let i = 0; i <= limit; i++){

        const message = (i % 2 === 2) ? 'EVEN' : 'ODD';
        console.log(message);
    }
}