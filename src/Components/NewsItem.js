import React, { Component } from 'react'
export class NewsItem extends Component {
  render() {
    let {title,desr,imurl,newsurl,autor,dates,sources}=this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <div style={{position:'absolute',display:'flex',justifyContent:'flex-end',right:'0'}}>
              <span className="badge rounded-pill bg-danger">{sources}</span>
            </div>
            <img className="card-img-top" src={imurl} alt="Card  cap"  style={{height:'140px',overflow:'hidden'}}/>
            <div className="card-body">
                <h5 className="card-title" >{title}...</h5>
                <p className="card-text">{desr}...</p>
                <p className="card-text"><small className='text-muted'> BY:{autor} on {new Date(dates).toGMTString()}</small></p>
                <a href={newsurl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read More...</a>
        </div>
</div>
      </div>
    )
  }
}

export default NewsItem