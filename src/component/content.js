import React from "react";
import {connect} from "react-redux"
import {addToCard} from "../redux/actions creators/action_1"
import {Link} from "react-router-dom"

class Content extends React.Component{
    constructor(props){
        super(props)
        this.state = {visible:false}
        
    }
    visible=()=>{
        this.setState({visible:true})
        setTimeout(()=>{
            this.setState({visible:false})
        },3000)
    } 
     

    sub =()=>{
        let cardItem = this.props.content
        cardItem.quality = 1
        if(!this.props.shoppingList.includes(cardItem)){
            this.props.addToCard(cardItem)
        }else this.visible()       
    }    
    render(){
        return (
            <div className="content">
                <Link to={"/content/"+this.props.content.id}><h4 className="content-title">{this.props.content.title}</h4></Link>
                <img className="content-img" src={this.props.content.img} alt="Товар" />
                <p>цена за 1 =<strong>{this.props.content.price}руб</strong> <button onClick={this.sub} style={{borderRadius:"5px"}}><span role="img" aria-label="">🛒</span></button></p>
                {this.state.visible?<p style={{backgroundColor:"red",marginTop:"2vh"}} className="content-title">Данный товар уже в корзине</p>:null}
            </div>
        )
    }
    
}
const mapStateToProps = state=>{
    return {
        shoppingList:state.shoppingList
    }
}
const mapDispatchToProps ={
    addToCard    
}

export default connect(mapStateToProps,mapDispatchToProps)(Content)

