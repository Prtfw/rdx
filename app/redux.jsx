var redux = require("redux")


//console.log('running redux')

//conditions: 1. has default state for when application is getting started 
// 2. return state even if no action or action not recognized


//state/store is just a simple js object with a bunch of properties 
var rdcr = (state = {name: 'anony'}, action ) => { //set default state if none passed in
    //state = state || {name: 'anony'}
    return state
}

var store = redux.createStore(rdcr)//takes pure function called reducer... take old state and computes new state

var curstate = store.getState()
console.log('curstate', curstate)
//pure functions 
/*
 - same input always gives same output
 - does not rely on other var outside of args
 - does not change any value = no side effect
 - cannot change values passed in (obj or arrays since these are passed by ref and not values)
 - is synchronus... does not make http or i/o requests (to db for example)
*/

// function add(a,b){
//     return a+b
// }