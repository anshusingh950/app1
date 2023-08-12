import React, { useState } from "react";

export default function About() {
  const [myStyle, setmyStyle] = useState({
    color: 'white',
    backgroundColor: 'black'
  });
  const [btntxt,setbtntxt]=useState("Light Mode");
  const toleclr = () => {
    if (myStyle.color ==='black') {
      setmyStyle({
        color: 'white',
        backgroundColor: 'black'
      });
      setbtntxt("Dark Mode");
    } 
    else {
      setmyStyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setbtntxt("Light Mode");

    }
  }

  const funct=()=>{
    let p=document.getElementsByClassName('collapse');
    for(let i=0;i<p.length;i++){
     
    if(p[i].style.display==='none'){
      p[i].style.display='block';
    }
    else{
      p[i].style.display='none';
    }
  }
  }
  return (
    <div className="container" style={myStyle}>
      <div className="accordion open" id="accordionExample" style={myStyle}>
        <div className="card"  style={myStyle}>
          <div className="card-header" id="headingOne">
            <h5 className="mb-0">
            <button className="accordion-button" type="button" onClick={funct} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
               
            </h5>
          </div>

          <div
            id="collapseOne"
            className="collapse show"
            aria-labelledby="headingOne"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingTwo">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Collapsible Group Item #2
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            className="collapse show"
            aria-labelledby="headingTwo"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
        <div className="card" style={myStyle}>
          <div className="card-header" id="headingThree">
            <h5 className="mb-0">
              <button
                className="btn btn-link collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Collapsible Group Item #3
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            className="collapse show"
            aria-labelledby="headingThree"
            data-parent="#accordionExample"
          >
            <div className="card-body">
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. 3 wolf moon officia aute, non
              cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
              laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird
              on it squid single-origin coffee nulla assumenda shoreditch et.
              Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred
              nesciunt sapiente ea proident. Ad vegan excepteur butcher vice
              lomo. Leggings occaecat craft beer farm-to-table, raw denim
              aesthetic synth nesciunt you probably haven't heard of them
              accusamus labore sustainable VHS.
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <button onClick={toleclr} className="btn btn-primary my-2">
         {btntxt}
        </button>
      </div>
    </div>
  );
}
