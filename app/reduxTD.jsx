var redux = require("redux")


console.log('running reduxTD')

//{searchtxt: '', shocomp: false, todos: []}, action) => {
var rdcr = (state = {searchtxt: '', shocomp: false, todos: []}, action ) => { //set default state if none passed in
    //state = state || {name: 'anony'}
    return state
}
    
var store = redux.createStore(rdcr)

var curstate = store.getState()
console.log('curstate', curstate)