const collection = document.getElementsByClassName('num');
const nums = Array.from(collection);
console.log(nums);

const button = document.getElementById('button').addEventListener('click', () => {
    // generate random numbers -> store them in array
    generateRandomN();
    console.log(Narr);

    // push the values to their corresponding elements
    for(let i = 0; i < 5; i++){
        nums[i].innerHTML = Narr[i];
    }

});

let Narr = [];
generateRandomN = () => {
    Narr = [];
   for(let i = 0; i < 5; i++){
       let rand = Math.floor((Math.random() * 50) + 1);
       Narr.push(rand);
   }
}