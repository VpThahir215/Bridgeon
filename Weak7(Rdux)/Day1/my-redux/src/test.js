import {createStore} from 'redux'


const initialState={
    value:0
}

function appReducer(prevState=initialState,action){
    // if(prevState===undefined){
    //     return initialState
    // }
    return prevState;

}
const store=createStore(appReducer)
const state=store.getState()
console.log(state);
document.getElementById('label').innerHTML=state.value

