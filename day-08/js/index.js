'use strict';


//takes in TWO callback functions!
function doTogether(firstCallback, secondCallback){
    firstCallback();  //execute the first function
    secondCallback();  //execute the second function
    console.log('at the same time!');
}

function patHead() {
    console.log('pat your head');
}

function rubBelly() {
    console.log('rub your belly');
}

//pass in the callbacks to do them together
doTogether(patHead, rubBelly);