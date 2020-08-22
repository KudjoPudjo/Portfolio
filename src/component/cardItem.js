import React from "react";
import {connect} from "react-redux"
import {addQuality,removeFromCard} from "../redux/actions creators/action_1"
import { Link } from "react-router-dom";


class CardItem extends React.Component{
    constructor(props){
        super(props)
        this.state ={quality:this.getObj().quality}
    }
    change=(e)=>{
        this.setState({quality:e.target.value})
    }
    add=e=>{
        let obj = this.props.list;
        obj.quality =+this.state.quality  
        console.log(obj);     
        this.props.addQuality(obj)      
    }    
    remove=()=>{
        console.log(this.props);
        this.props.removeFromCard(this.props.list)
    }
    getObj(){         
        let obj = this.props.shoppingList.find((elem,i)=>{
            if( this.props.shoppingList[i].id === this.props.list.id){
                return true
            }
        })
        
        return obj
    }
    render(){
        return (
            <div className="content cardItem" style={{height:"23vh"}}>                
                <div ><button className="removeBtn" onClick={this.remove}>✕</button><Link to={"/content/"+this.getObj().id}><h4 className="content-title">{this.getObj().title}</h4></Link></div>
                <img className="content-img" src={this.getObj().img} alt="Товар" />
                <p>{this.getObj().quality}=<strong>{this.getObj().price*this.getObj().quality}руб</strong></p>
                <div>
                    <i>Колличество </i><input className="quality" type="number" value={this.state.quality} onChange={this.change} min="1" id={this.getObj().id}/>
                    <button onClick={this.add} style={{borderRadius:"5px",marginLeft:"0.5rem"}}><span role="img" aria-label="">🛒</span></button>
                </div>
            </div>
        )
    }
    
}
const MapStateToProps = state=>{
    return {
        shoppingList:state.shoppingList
    }
}
const mapDispathcToProps ={
    addQuality,
    removeFromCard
}

export default connect(MapStateToProps,mapDispathcToProps)(CardItem)