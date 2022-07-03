// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

saturdayFun('bathe my dog')
function mondayWork(act = 'go to the office') {
    return `This Monday, I will ${act}.`

}
function wrapAdjective(flair = '*') {
    return function(msg = "a hard worker"){
        return `You are ${flair}${msg}${flair}!` 
    }
}
 

