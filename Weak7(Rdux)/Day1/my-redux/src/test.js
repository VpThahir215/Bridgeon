import {createStore} from 'redux'


const initialState={
    value:0
}

function appReducer(prevState=initialState,action){
    // if(prevState===undefined){
    //     return initialState
    // }

    switch (action.type ){
        case 'increment':
            return{
                ...prevState,
                value:prevState.value+1
            }
              case 'decrement':
            return{
                ...prevState,
                value:prevState.value-1
            }
            default:
                return prevState;
    }
    return prevState;

}
const store=createStore(appReducer)
export default store

