export const actionType={
    SET_USER:"SET_USER",
    GET_FOODITEM:"GET_FOODITEM_ALL",
    SET_CARTSHOW:"SET_CARTSHOW",

}
 const reducer=(state,action)=>{
    switch(action.type){
        case  actionType.SET_USER:
        return {...state,
        user:action.user,   }
     
        case  actionType.GET_FOODITEM:
        return {
            ...state,
        fooditem:action.fooditem,   }
        case  actionType.SET_CARTSHOW:
        return {
            ...state,
        cartshow:action.cartshow,   }
    default :
    {
        return state
    }
    }
    
}
export default reducer