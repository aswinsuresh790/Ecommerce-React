export const actionType={
    SET_USER:"SET_   USER",
    GET_FOODITEM:"GET_FOODITEM_ALL"

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
    default :
    {
        return state
    }
    }
    
}
export default reducer