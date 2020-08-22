import React from "react"
import {connect} from "react-redux"
import CardItem from "./cardItem"


function Card({shoppingList}){    
    let totalPrice=0;    
    shoppingList.map((elem,i)=>{
        let price = elem.quality *elem.price; 
        console.log(price);       
        totalPrice =totalPrice+price
        
    }) 
    function purchase(){
        let arr = [];
        for(let item of shoppingList){
            let obj ={
                id:item.id,
                quality:item.quality,
                price:item.price
            }
            arr.push(obj)
        }
        alert("Ваш заказ обрабатываеться!")
    }      
    return (
        <div className="cardContetn">
            {shoppingList.map((list,i)=><CardItem key={i} list={list}></CardItem>)}
            <div className="finelPrice">
            <h4>Итоговая ценна: {<strong>{totalPrice?totalPrice:0} руб</strong>}</h4>
            <button style={{marginBottom:"1vh"}} className="btn btn-success" onClick={purchase}>Оплатить</button>
            </div>
        </div>
    )
}

const MapStateToProps = state=>{
    return {
        shoppingList:state.shoppingList
    }
}
export default connect(MapStateToProps)(Card)