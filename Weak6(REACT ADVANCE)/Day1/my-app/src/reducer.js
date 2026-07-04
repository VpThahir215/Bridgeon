
function reducer(state,action){
    if(action.type==="Increment"){
        return state+1
    }
      if(action.type==="Decrement"){
        return state-1
    }

return state;
}

export default reducer;