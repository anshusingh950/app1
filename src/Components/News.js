import React, { Component } from 'react'
import NewsItem from "./NewsItem"
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
export class News extends Component {
  static defaultPropTypes={
    cntry:'in',
    pagesize:15
  }
  static propTypes={
    cntry:PropTypes.string,
    pagesize:PropTypes.number
  }
  articles=[
    {
    
  "source": {
    "id": "the-washington-post", "name": "The Washington Post" },
    "author": "Niha Masih",
    "title": "Russia-Ukraine war news: Small village of Urozhaine retaken, Kyiv claims - The Washington Post",
    "description": "Ukraine paid a high price in casualties for retaking the village in the Donetsk region, a Russian-aligned commander said.",
    "url": "https://www.washingtonpost.com/world/2023/08/17/russia-ukraine-war-news/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/QSJJ2H54ZP43PVZX32L4IRQRPI_size-normalized.JPG&w=1440",
    "publishedAt": "2023-08-17T08:04:22Z",
    "content": "Ukrainian troops have recaptured the village of Urozhaine in the southeastern Donetsk region, Deputy Defense Minister Hanna Maliar said Wednesday on Telegram, as the country continues a slow-moving c… [+3599 chars]"
    }
    ,
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Mitchell McCluskey, Aya Elamroussi",
    "title": "Hundreds of wildfires raging in Canada’s Northwest Territories prompt evacuations in what officials are calling a ‘crisis situation’ - CNN",
    "description": "Hundreds of wildfires raging in parts of Canada’s Northwest Territories have prompted officials to issue evacuation orders and declare a state of emergency as the blazes threaten the capital city of Yellowknife.",
    "url": "https://www.cnn.com/2023/08/16/americas/canada-northwest-territories-wildfires-thursday/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230816214344-01-northwest-territories-wildfire-081523.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-08-17T07:48:00Z",
    "content": "Hundreds of wildfires raging in parts of Canadas Northwest Territories have prompted officials to issue evacuation orders and declare a state of emergency as the blazes threaten the capital city of Y… [+4729 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Kelly Kasulis Cho",
    "title": "About 1.5 million dehumidifiers recalled; brands include GE and Kenmore - The Washington Post",
    "description": "More than 40 dehumidifier models made by Gree and sold in the U.S. under brands such as Kenmore and GE were recalled after reports of fires and overheating.",
    "url": "https://www.washingtonpost.com/nation/2023/08/16/gree-dehumidifier-recall-ge-kenmore/",
    "urlToImage": "null",
    "publishedAt": "2023-08-17T06:40:00Z",
    "content": "Comment on this story\r\nComment\r\nMore than 40 models of dehumidifiers from well-known brands such as Kenmore and GE were recalled Wednesday after reports of fires and overheating incidents stirred con… [+1856 chars]"
    }
  ]
  
  constructor(){
    super();
    console.log("i am a constructor");
    this.state={
    articles:this.articles,
    loading:false,
    page:1,
    tot:3
    
    }
  }
  async updnews(){
    this.props.pro(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.cntry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pagesize}`;    
    this.props.pro(30);

    let data=await fetch(url);
    let jd=await data.json();
    this.props.pro(50);

    this.setState({articles:jd.articles,tot:jd.totalResult});
    this.props.pro(100);

  }
  async componentDidMount(){
      this.updnews();
    }
    decf=async()=>{
      await this.setState({page:this.state.page-1});
      await this.updnews();
    }
    incrf= async()=>{
      if(24*this.page>=this.articles.totalResult){

      }
      else{
    
        await this.setState({page:this.state.page+1});
        await this.updnews();
      }
      
    }
    fetchMoreData = async() => {
        this.setState({page:this.state.page+1});
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.cntry}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.props.pagesize}`;    
        let data=await fetch(url);
        let jd=await data.json();
        console.log(jd);
        this.setState({articles:this.state.articles.concat(jd.articles),tot:jd.totalResult})
     
    };
  render() {
    return (
      <div className='container' >
        <h2>Toofaan Samachaar-{`>`} Big HeadLines</h2>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.tot}
          loader={<h4>Loading...</h4>}
        >
        <div className="row">
        {this.state.articles.map((el)=>{
            return <div className="col-md-4" key={el.url}>
            <NewsItem title={el.title?el.title:''} desr={el.description?el.description:''} imurl={el.urlToImage?el.urlToImage:'./photo4.jfif'}  newsurl={el.url} autor={el.author} dates={el.publishedAt} sources={el.source.name}/>
            </div>
        })}
        </div>
        </InfiniteScroll>
      
      </div>
    )
  }
}

export default News