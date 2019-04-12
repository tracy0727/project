import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Product from './routes/Product'
import About from './routes/About'
import Home from './routes/Home'
import House from './routes/House'
import Header from './components/Header'
import Footer from './components/Footer'
import { BrowserRouter as Router, Route } from "react-router-dom";

//Servies
import BannerServices from './services/Banner'
import ProductServices from './services/Product'
class App extends Component {
  constructor() {
    super();
    this.state={
      products: [],
      list: [],
      banners:[],
      test:'',
    }
    this.getProducts();
    this.getBanners();
  }
  async getBanners() {
    const banners = await BannerServices.get();
    this.setState({ banners });
  }
  async getProducts() {
    const products = await ProductServices.get();
    this.setState({ products });
  }
  
  renderRoute(props,name){
    switch(name){
      default:
      case 'Home': return <Home {...props} products={this.state.products} onAdd={this.add} banners={this.state.banners}/>
      case 'Product': return <Product {...props} products={this.state.products} onAdd={this.add}/>
      case 'About': return <About {...props} products={this.state.products} list={this.state.list} onRemove={this.remove}/>
      case 'House' :return <House {...props} products={this.state.products} list={this.state.list} onRemove={this.remove}/>
    }
    // return <Component {...props} products={this.state.products} list={this.state.list}/>
  }
  add = (buyList) => {
    // var findAgeThan5 = list.find(function(item, index, array){
    //   if(item.id=buyList.id){
    //     item.num =item.num+1;      
    //   }
    //   return item
    // });
    //  console.log(findAgeThan5)
    // // const list1=this.state.list
    // list1.push(buyList)
    // this.setState({list:list1})
    // this.setState(buyList)
    const list = [
      ...this.state.list,
      { ...buyList },
    ];

    // var findAgeThan5 = list.find(function(item, index, array){
    //   if(item.id=buyList.id){
    //     item.num =item.num+1;      
    //   }
    //   return item
    // });
    //  console.log(findAgeThan5)
    // const list = this.state.list;
    // list.push({ ...name, status: false });
     this.setState({ list });
  }

  remove = (key) => {
    const list = this.state.list.filter((value, index) => index !== key);
    this.setState({ list });
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header list={this.state.list} />
          <Route path="/" exact render={(props) => this.renderRoute(props,'Home')} />
          <Route path="/about" render={(props) => this.renderRoute(props,'About')} />
          <Route path="/product/:id" render={(props) => this.renderRoute(props,'Product')}/>
          <Route path="/product/" exact render={(props) => this.renderRoute(props,'Product')}/>
          <Route path="/house" render={(props) => this.renderRoute(props,'House')}/>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
