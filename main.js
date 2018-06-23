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

generateRandomN = (n, upper, arr) => {
    for(let i = 0; i < n; i++){
        let rand = Math.floor((Math.random() * upper) + 1);

        if(rand === Narr[i - 1]){
            rand = rand +1;
        }
        arr.push(rand);
    }
    sortArr(arr);
}

sortArr = (arr) => {
    arr = arr.sort((a, b) => {
        return a > b;
    });
}

generatePicks = () => {
    // generate main numbers
    generateRandomN(5, 50, Narr);
    // generate extra picks
    generateRandomN(2, 10, N2arr);
}

setInner = (arr, name) => {
    for (let i = 0; i < name.length; i++) {
        name[i].innerHTML = arr[i];
    }
}