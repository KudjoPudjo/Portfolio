import React from "react";
import { connect } from "react-redux";
import {addToCard,changeCartContent} from "../redux/actions creators/action_1"

function getRoute(){
    let route = window.location.href.slice(30,window.location.href.length)
    return route
}

function PageContent({page,addToCard,shoppingList,changeCartContent}){     
    let [quality,setQuality] = React.useState(page.quality)
    let [rc,setRc] = React.useState(page.img)   
    let image = {
        id1:"https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Mangekyou_Sharingan_Madara.svg/1024px-Mangekyou_Sharingan_Madara.svg.png",
        id2:"https://i.pinimg.com/originals/56/aa/f9/56aaf97b619f58f6f9618938aca0c524.png",
        id3:"https://vignette.wikia.nocookie.net/naruto/images/5/5c/Byakugan_Momoshiki.svg/revision/latest/top-crop/width/220/height/220?cb=20190609120400&path-prefix=ru"
    
    }    
    function slide(e){
        let active = document.querySelector("li[class='active']")
        active.setAttribute("class","")
        e.target.classList = "active";               
        let color = e.target.style.backgroundColor;                
        let img = document.querySelector("img[class='content-page-img']"); 
              
        if(color === "red")setRc(image.id1);
        else if(color === "purple")setRc(image.id2) ;
        else if(color === "yellow")setRc(image.id3);
        console.log(rc);
        img.src = rc               
    }
    function submit(){        
        let pic = rc===""?page.img:rc
        let obj = page;
        const index =shoppingList.findIndex(x=>x.id===page.id);
        console.log(index);  
        obj.img = pic;
        obj.quality = quality;
        console.log(obj);        
        if(index === -1){
            addToCard(obj)
        }
        else changeCartContent(obj)
    }
    
    function change(e){        
        setQuality(e.target.value)
    }
    
    
    if(page.length === 0){
        return(
            <div className="cardContetn"><h1 style={{marginTop:"10vh",marginLeft:"20vw"}} className="content-title">Товар не найден</h1></div>
        )
    }
    return (
        <div className="cardContetn">
            <div className="pageContent">
                <h4 style={style.title} className="content-title">{page.title}</h4>
                <div className="slider">
                <img className="content-page-img" id="img"  src={rc}/>             
                <ol className="carousel-indicators sliderPos" onClick={slide}>
                    <li style={{backgroundColor:"purple"}}  data-slide-to="0" id="1" className="active"></li>
                    <li style={{backgroundColor:"red"}}   data-slide-to="1" id="2"></li>
                    <li style={{backgroundColor:"yellow"}}  data-slide-to="2" id="3"></li>
                </ol>
                </div>
                <div style={{marginLeft:"2vw"}}><strong style={{marginLeft:"-2vw"}} className="content-title">Цена: {quality * page.price}</strong> <input type="number" min="1" onChange={change} value={quality} style={{width:"3vw",marginRight:"0.2vw",}} /><button onClick={submit} style={{backgroundColor:"green",borderRadius:"10px"}}>🛒</button></div>
                <div className="discription">
                <h2 className="content-title">Описание</h2>
                <div >Шаринган (яп. 写輪眼; Буквальное значение: "Копирующий Вращающийся Глаз") — доудзюцу и Улучшенный Геном клана Учиха, который выборочно проявляется у его членов. Он считается одним из Трех Великих Доудзюцу (三大瞳術, Сан Дайдоудзюцу; Буквальное значение: "Три Великих Техники Глаз") наряду с Бьякуганом и Риннеганом. В то время как его силы произошли от Ринне Шарингана Кагуи Ооцуцуки, как отдельное доудзюцу, он впервые пробудился у Индры Ооцуцуки (Хагоромо Ооцуцуки в аниме).</div>
                </div>
            </div>            
        </div>
    )
}
const mapDispatchToProps = {
    addToCard,
    changeCartContent
}
const mapStateToProps=state=>{
    let id =+getRoute()
    let obj =state.shoppingList.find((elem)=>{        
        if(elem.id === id){            
            return true
        }
    })
    
    let arr_elem = {};  
    if(!obj){
        obj =state.content.find((elem)=>{        
            if(elem.id === id){            
                return true
            }
        })                
        for (let key in obj) 
        arr_elem[key] = obj[key];
        arr_elem.quality = 1; 
    } 
    for (let key in obj) 
        arr_elem[key] = obj[key];       
    return {
        page:arr_elem,
        shoppingList:state.shoppingList
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PageContent)


const style ={
    title:{
        marginBottom:"2vh",
        marginLeft:"1vw"
    },
    
}