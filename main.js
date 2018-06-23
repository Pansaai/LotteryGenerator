const collection = document.getElementsByClassName('main');
const main = Array.from(collection);

const collection2 = document.getElementsByClassName('extra');
const extra = Array.from(collection2);

let Narr = [];
let N2arr = [];

const button = document.getElementById('button').addEventListener('click', () => {

    // reset Arrays
    Narr = [];
    N2arr = [];

    // generate random Picks
    generatePicks();

    // push the values to their corresponding elements
    setInner(Narr, main);
    setInner(N2arr, extra);
});

// Generate a RandomNumber and push it to the right Array
generateRandomN = (n, upper, arr) => {
    for(let i = 0; i < n; i++){
        let rand = Math.floor((Math.random() * upper) + 1);
        arr.push(rand);
    }

    sortArr(arr);
    checkDuplicate(arr, upper);
}

// sort the array from low to high
sortArr = (arr) => {
    arr = arr.sort((a, b) => {
        return a > b;
    });
}

// generate the main and extra picks
generatePicks = () => {
    // generate main numbers
    generateRandomN(5, 50, Narr);
    // generate extra picks
    generateRandomN(2, 10, N2arr);
}

// set the innerHTML of the corresponding picks
setInner = (arr, name) => {
    for (let i = 0; i < name.length; i++) {
        name[i].innerHTML = arr[i];
    }
}

// if 2 the same numbers generate 1 new one and check again until all numbers are different. 
// checkSame = (arr, upper) => {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === arr[i+1]){
//             console.log('changed number ' + arr[i+1]);
//             arr[i+1] = Math.floor((Math.random() * upper) + 1);
//         }
//     }
//     sortArr(arr);
// }

//TODO check for duplicates with a hashmap
checkDuplicate = (arr, upper) => {
    let hash = new Map();
    for(let i = 0; i < arr.length; i++){
        if(!hash.has(arr[i])){
            hash.set(arr[i]);
        } else {
            arr[i] = Math.floor((Math.random() * upper) + 1);
            hash.set(arr[i]);
            sortArr(arr);
        }
    }
}