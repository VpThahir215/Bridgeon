function reduce (state,action){
if(action.type==="incriment"){
    return state +1;
}
if(action.type==="decriment"){
    return state -1
}
return state
}

export default reduce