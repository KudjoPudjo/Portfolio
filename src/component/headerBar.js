import React from "react";
import {connect} from "react-redux"
import {Link} from "react-router-dom"



const logo = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mangekyou_Sharingan_Shisui.svg/1024px-Mangekyou_Sharingan_Shisui.svg.png"

function HeaderBar({shoppingList}){    
    return (
        <div className="headerBar">            
            <Link to="/"><img src={logo} alt='На главную?'/></Link>
            <h1 className="content-title headerBar-title">Магазин аниме продукции</h1>            
            <div style={{marginLeft:"15vw",display:"flex"}}>
                <h1 className="content-title headerBar-title">Корзина</h1>
                <Link style={{textDecoration:"none",color:"black"}} to="/card">
                <div className="cardLength">
                <strong>{shoppingList.length}</strong>
                <span role="img" aria-label="">🛒</span>
                </div>
                </Link>
            </div>            
        </div>
    )
}


const MapStateToProps = state=>{
    return {
        shoppingList:state.shoppingList
    }
}
export default connect(MapStateToProps)(HeaderBar)