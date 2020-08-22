import React from 'react';
import ShopContent from './component/shop-content';
import HeaderBar from './component/headerBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cards from "./component/cart"
import PageContent from "./component/contentPage"


function App() {  
  return (
    <div className="App">
      <BrowserRouter>
      <HeaderBar></HeaderBar>
        <Switch>
          <Route  path="/" component={ShopContent} exact></Route>
          <Route path="/card" component={Cards}></Route>
          <Route path="/content/:id" component={PageContent}></Route>
        </Switch>
      </BrowserRouter>  
      
    </div>
  );
}

export default App;
