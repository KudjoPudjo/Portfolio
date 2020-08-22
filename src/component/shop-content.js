import React from "react"
import {connect} from "react-redux"
import Content from "./content"

function contentBar({content}){    
    return (
        <div className="shop-content">
            {content.map((elem,i)=><Content key={i}  content={elem}></Content>)}
        </div>
    )
}

const mapStateToProps = state =>{
    return {
        content:state.content
    }
}

export default connect(mapStateToProps)(contentBar)