const  CardReducer=(state, action)=>{
 
    switch(action.type){
       case "SEARCH_DATA":
        return{
          ...state,
          cardData: state.cardData.filter(item =>
            item.Dishes.toLowerCase().includes(action.payload.toLowerCase())
          ),
          }

            

default:
    return state
    }
}

 export default CardReducer;
