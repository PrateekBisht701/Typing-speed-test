//1
const setOfWords = [
    "He kept telling himself that one day it would all somehow make sense.",
    "After fighting off the alligator, Brian still had to face the anaconda.",
    "In hopes of finding out the truth, he entered the one-room library.",
    "He looked behind the door and didn't like what he saw.",
    "The bug was having an excellent day until he hit the windshield.",
    "Cats are good pets, for they are clean and are not noisy.",
    "Yeah, I think it's a good environment for learning English.",

]

//2
const msg = document.getElementById('msg');
const typeWords = document.getElementById('myWords');
const btn = document.getElementById('btn');
let startTime;
let endTime;

// 4
let playGame = () => {
    let randomNumber = Math.floor(Math.random()*setOfWords.length)
    msg.innerText = setOfWords[randomNumber]
    let date = new Date()
    startTime = date.getTime()
    btn.innerText = "Done"
}

// 5
let endPlay = () => {
    let date = new Date()
    endTime = date.getTime()
    let totalTime = (endTime - startTime) / 1000
    console.log(totalTime)

    let totalStr = typeWords.value
    let wordCount = wordCounter(totalStr)

    let speed = Math.round((wordCount / totalTime) * 60)

    let finalMsg = "You typed total at " + speed + " of words per minute."
    finalMsg += compareWords(msg.innerText, totalStr)
    msg.innerText = finalMsg;
}



// 6
let wordCounter = (str) => {
    let response = str.split(" ").length
    return response
}

// 7
let compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach((item, index) => {
        if(item == words2[index]){
            cnt++
        } 
    });
    
    let errorWords = (words1.length - cnt) 
    return (cnt + " correct out of " + words1.length + " words and the total number of error are " + errorWords + ".")
    console.log(words1)
}
// 3  Added EventListener to the Button.
btn.addEventListener('click', function(){
    if(this.innerText == 'Start'){
        typeWords.disabled = false;
        playGame();    
    } 
     else if(this.innerText == "Done"){
         typeWords.disabled = true;
         endPlay();
     }
})