import './App.css'
import Navbar from "./Components/Navbar"
import React, { Component } from 'react'
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class APP extends Component {
  apikey=process.env.REACT_APP_NEWS_API
  state={
    progress:0
  }
  setP=(progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar/>
          <LoadingBar
            color='#f11946'
            height={3}
            progress={this.state.progress}
          />


          <Routes>
                        
            <Route exact path="/" element={<News key={'key1'} category='general' pagesize={10}  cntry='in'   pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             <Route exact path="/sports" element={<News key={'key2'} category='sports' pagesize={10}  cntry='in'  pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             <Route exact path="/entertainment" element={<News key={'key3'} category='entertainment' pagesize={10}  cntry='in'  pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             <Route exact path="/business" element={<News key={'key4'} category='business' pagesize={10}  cntry='in'  pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             <Route exact path="/technology" element={<News key={'key5'} category='technology' pagesize={10}  cntry='in'  pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             <Route exact path="/health" element={<News key={'key6'} category='health' pagesize={10}  cntry='in'  pro={this.setP} apiKey={this.apikey}/>
             }> </Route>
             


        </Routes>
          
        </BrowserRouter>
      </div>
    )
  }
}
