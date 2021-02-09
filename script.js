'use strict';

let sum =0;
let current = 6;
let ran = Math.floor((Math.random()*20) + 10);
const score =Number(document.querySelector('.score').textContent);





document.querySelector('.check').addEventListener('click',function(){

    let score =Number(document.querySelector('.score').textContent);
    let input = Number(document.querySelector('.input_number').value);




if (input == ran ){
    document.querySelector('.message').textContent =  "you got it 🎉🎉";
    document.querySelector('.body').classList.add('winner');
}


else if (input < 10 || input >30) {
    document.querySelector('.message').textContent = 'it is between 10 and 30';
}

else if (input > ran){

    if (score == 0){
        score=0;
    }

    else{
        sum++;
    document.querySelector('.message').textContent = "it is less than " + input;
    
    document.querySelector('.score').textContent= score -1;
    score -= 1;
}}

else if (input < ran){

    if (score == 0){
        score=0;
    }

    else{
        sum++;
    document.querySelector('.message').textContent = "it is more than " + input;
    document.querySelector('.score').textContent= score -1;
    score -= 1;
}}

if (score == 0){
    document.querySelector('.message').textContent =  "you loose";
    document.querySelector('.body').classList.add('loose');
}


})


document.querySelector('.again').addEventListener('click',function(){
    if(sum < current){
        document.querySelector('.label-highscore').textContent = '🥇 Highscore: ' + sum;
        current=sum;
    }
    else {
        document.querySelector('.label-highscore').textContent = '🥇 Highscore: ' + current;
    }

     ran = Math.floor((Math.random()*20) + 10);
    document.querySelector('.body').classList.remove('loose');
    document.querySelector('.body').classList.remove('winner');
    document.querySelector('.message').textContent =  "Start guessing...";
    document.querySelector('.score').textContent =  "5";
    document.querySelector('.input_number').value =  10;
    sum =0;

    // location.reload();
    

})