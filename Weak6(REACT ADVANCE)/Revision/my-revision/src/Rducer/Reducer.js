function Reducer(state,type){
if(type==="Increment"){
    state++ 
}else{
    state--
}
return state
}
export default Reducer