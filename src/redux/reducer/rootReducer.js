import {ADD_TO_CARD,REMOVE_FROM_CARD, ADD_QUALITY, ADD_TO_SELECTED, CHANGE_CART_CONTENT} from "../actions/actions_1"



const img = "https://i.pinimg.com/originals/56/aa/f9/56aaf97b619f58f6f9618938aca0c524.png"
const initialState = {
    content:[{
        title:"Шаринган",
        img:img,
        price:300,
        id:1
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:2
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:3
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:4
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:5
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:6
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:7
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:8
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:9
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:10
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:11
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:12
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:13
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:14
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:15
    },{
        title:"Шаринган",
        img:img,
        price:300,
        id:16
    }],
    shoppingList:[],
    
}
function cloneArray(arr) {
    let result = [];
    arr.forEach(value=>{
        let arr_elem = {};
        for (let prop in value) 
        arr_elem[prop] = value[prop];
        result.push(arr_elem);
    });
    return result;
}

function reducer(state = initialState,action){
    switch(action.type){
        case ADD_TO_CARD:{
            for(let i= 0; i<state.shoppingList.length;i++){               
                if(state.shoppingList[i].id === action.content.id){                    
                   return  {...state,shoppingList:state.shoppingList}
                }
            }
            return {...state,shoppingList:state.shoppingList.concat([action.content])}
        } 
        case REMOVE_FROM_CARD:return {...state,shoppingList:state.shoppingList.filter(item=>item.id !== action.content.id)}
        case ADD_QUALITY : {
            const index =state.shoppingList.findIndex(x=>x.id===action.content.id);            
            let new_arr = cloneArray(state.shoppingList)
            
            new_arr[index] = action.content
            return{...state,shoppingList:new_arr}
        }
        case CHANGE_CART_CONTENT:{ 
            const index =state.shoppingList.findIndex(x=>x.id===action.content.id);            
            let new_arr = cloneArray(state.shoppingList);            
            new_arr[index] =action.content;
            console.log(new_arr);
            return {...state,shoppingList:new_arr}
        }
               
        default: return state
    }
}

export default reducer