const  CardReducer=(state, action)=>{
 
    switch(action.type){
       case "SEARCH_DATA":{
        if (action.payload === "") {
            return {
              ...state,
              listData: []
            }
          } else {
            return {
              ...state,
              listData: state.cardData.filter(dish => dish.Dishes.toLowerCase().includes(action.payload.toLowerCase()))
            }
          }
       }

default:
    return state
    }
}

 export default CardReducer;
