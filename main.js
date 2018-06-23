const collection = document.getElementsByClassName('num');
const nums = Array.from(collection);

let Narr = [];

const button = document.getElementById('button').addEventListener('click', () => {
    // generate random numbers -> store them in array
    generateRandomN();

    Narr = Narr.sort((a,b) => {
        return a > b;
    });

    // push the values to their corresponding elements
    for(let i = 0; i < 5; i++){
        nums[i].innerHTML = Narr[i];
    }

});

generateRandomN = () => {
    Narr = [];
   for(let i = 0; i < 5; i++){
       let rand = Math.floor((Math.random() * 50) + 1);
       Narr.push(rand);
   }
}