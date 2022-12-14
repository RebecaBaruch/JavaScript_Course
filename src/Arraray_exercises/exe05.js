const numbers = [1, 2, 3, 4];

const count = countOccurences(numbers, 1);

function countOccurences(array, searchElement){
    let count = 0;
    
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurrence;
    }, 0)
}