import { createContext, useReducer } from "react";
import CardReducer from "./CardReducer";

const CardContext=createContext()
export const CardProvider=({children})=>{
const initialState={
    cardData:[{
        id:1, 
        Dishes:"Veg paratha",
        Price: 50,
        Addon:"Veg paratha with extra Sauce, Yogurt and Corn.",
        img:"https://media.istockphoto.com/id/1400111999/photo/mix-vegetable-kathi-roll.jpg?s=612x612&w=0&k=20&c=1s0zfb3u1wT-zZ-fmwRG_dSq-A75wgMqc8E0B8dPBeY=",
        quantity:1,
        
        
    },
{
    id:2, 
        Dishes:"Plain paratha+ Yogurt",
        Price:40,
        Addon:"Plain paratha + Yogurt with extra Sauce.",
        img:"https://media.istockphoto.com/id/1516043206/photo/top-view-of-plain-paratha-served-with-dahi-and-achar.jpg?s=612x612&w=0&k=20&c=yqZ-7aez2acNhVphfNC1hhqP3uIDLDgWT1jyvtTEvxE=",
        quantity:1,
    },
{
    id:3, 
        
        Dishes:"Aalo Paratha",
        Price:50,
        Addon:"Aalo Paratha with extra Sauce, Yogurt and cheese.",
        img:"https://media.istockphoto.com/id/1334569511/photo/indian-vegetarian-meal-paratha.jpg?s=612x612&w=0&k=20&c=2XVpqEf2gCtqhhZzQUlCpNzq_X2_rJUrn2m_ThjbYuA=",
        quantity:1,
},
{
    id:4, 
        Dishes:"Double Cheese Paratha",
        Price:       70,
        Addon:"Double Cheese Paratha with extra Sauce, Corn and Yogurt.",
        img:"https://media.istockphoto.com/id/1209898811/photo/chapati-wrap-with-cheese-vegetarian-food.jpg?s=612x612&w=0&k=20&c=nSbQOQrOq4W2VDYlazvsX9BERrqPekAM5KIEMf0kwCU=",
        quantity:1,
    },
{
    id:5, 
        Dishes:"Corn Cheese Paratha",
        Price:       80,
        Addon:" Corn Cheese Paratha with extra Sauce , Yogurt and Cheese.",
        img:"https://media.istockphoto.com/id/1311045811/photo/vegetable-tortilla-wrap-with-cheese.jpg?s=612x612&w=0&k=20&c=8hV7p-Qmn6JdlXf7uJ_GhBvMCF26eKW-iCRGWPhnfVg=",
        quantity:1,
    },
{
    id:6,
    Dishes:"Paneer Paratha",
    Price:60,
    Addon:" Paneer Paratha with extra Sauce , Yogurt and Cheese.",
    img:"https://media.istockphoto.com/id/1218612786/photo/grilled-chicken-sandwich-with-chicken-sauce.jpg?s=612x612&w=0&k=20&c=Lj8LvbGptUBxGmIJmca0LN7jGwi31tSBEUOfjyJ-2_s=",
    quantity:1,
},
{
    id:7,
    Dishes:"Gobi Paratha",
    Price:60,
    Addon:" Gobi Paratha with extra Sauce , Yogurt and Cheese.",
    img:"https://media.istockphoto.com/id/626060906/photo/gobi-paratha-or-cauliflower-parotha.jpg?s=612x612&w=0&k=20&c=vBeUMPPBzHzvdygX2EJttTomxNJqt5DZ26U-w0buQ0o=",
    quantity:1,
},
{
    id:8,
    Dishes:"Methi Paratha",
    Price:40,
    Addon:" Methi Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/1413556629/photo/a-food-called-methi-paratha-or-methi-thepla-is-an-indian-breakfast-dish-served-with-curd.jpg?s=1024x1024&w=is&k=20&c=FGnRGDe8e9JO7iugUh4pffbaWMjK2F8wIxaGLy8Sc38=",
    quantity:1,
},
{
    id:9,
    Dishes:" Palak Paratha",
    Price:40,
    Addon:"Palak Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/1232182489/photo/palak-paratha-or-indian-flat-breads-made-from-spinach.jpg?s=612x612&w=0&k=20&c=eh8VpEo6SAQNJ28AOdNQUl8K8-7Evwx2OYCgqT0NhMo=",
    quantity:1,
},
{
    id:10,
    Dishes:"Cheese Paratha",
    Price:50,
    Addon:"Cheese Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/1064496380/photo/big-cheese-pizza-on-a-round-cutting-board-on-a-dark-wooden-background-pizza-ingredients.jpg?s=612x612&w=0&k=20&c=L7RuxeLq7jFU7Shx83SAdgX54jh_Q3uu1G7gTvfirCk=",
    quantity:1,
},
{
    id:11,
    Dishes:" Masala Paratha",
    Price:50,
    Addon:"Masala Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/1323465260/photo/trio-stuffed-naan-green-tikka-chicken-qeema-minced-meat-and-chocolate-brownie-cookie.jpg?s=612x612&w=0&k=20&c=h5io1q2n2TEdh4iBQalqMBYWIY4F9wfQ9FuCYkUE5o0=" ,  
    quantity:1,
},
{
    id:12,
    Dishes:" Lachha Paratha",
    Price:60,
    Addon:"Lachha Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/1298602799/photo/image-of-indian-butter-chicken-tikka-curry-served-in-turquoise-blue-cooking-pan-filled-with.jpg?s=612x612&w=0&k=20&c=0UvFXXWJvNtm9uj7p-Ov42vDb--eF8gXSx7_-KyB9Ic=" ,  
    quantity:1,
},
{
    id:13,
    Dishes:" Dal Paratha",
    Price:40,
    Addon:"Dal Paratha with extra Sauce , Yogurt, Corn and Cheese.",
    img:"https://media.istockphoto.com/id/697688404/photo/indian-roti-prata-with-condensed-milk-and-curry-sauce.jpg?s=612x612&w=0&k=20&c=q19FqPVPmAySckSH8PU4C7Wo-MRxDLWOCXGeDpFx5pI="  ,   
    quantity:1,
},
{
    id:14,
    Dishes:" Peas Paratha",
    Price:50,
    Addon:"Peas Paratha with extra Sauce , Yogurt and Cheese.",
    img:"https://media.istockphoto.com/id/900284552/photo/green-peas-paratha-or-matar-ka-paratha-which-is-a-traditional-and-popular-food-native-to-north.jpg?s=612x612&w=0&k=20&c=Olu6WWKMIkhGU35b82wuBDjJYCDAtmxUYc4sc5Peetw=",
    quantity:1,
},
{
    id:15,
    Dishes:" Chana Dal Paratha",
    Price:40,
    Addon:"Chana Dal Paratha with extra Sauce , Yogurt and Cheese.",
    img:"https://media.istockphoto.com/id/490050628/it/foto/bran-paratha-puri-servito-con-ceci-cholay-e-cetriolino-chutne.jpg?s=612x612&w=0&k=20&c=8aK6pM0RtTVXZlPR-Fr3N1sBXrGzoLcKtHuR21ODqw8=",
    quantity:1,
}
],
listData:[],
};
const[state, CardDispatch]=useReducer(CardReducer, initialState)
return(
    <CardContext.Provider value={{...state, CardDispatch }}>
        {children}
    </CardContext.Provider>
)
}
export default CardContext;