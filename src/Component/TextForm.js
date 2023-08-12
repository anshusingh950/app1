import React, {useState} from "react";
// import PropTypes from 'prop-types';
export default function TextForm(props) {
  
  const upclk = () => {
    let newTxt = text.toUpperCase(text);
    setText(newTxt);
    props.alert("Converted to UpperCase","Success")
  };
  const lwclk = () => {
    let newTxt = text.toLowerCase(text);
    setText(newTxt);
    props.alert("Converted to LowerCase","Success")

  };
  const scsclk = () => {
    let str = text.toLowerCase();
    
    str = str.split(" ");

    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }    
    setText(str.join(" "));
    props.alert("Converted to SentenceCase","Success")

  };
  const srtclk = () => {
    let newTxt = text.split("").sort().join("");
    newTxt = newTxt.trim();
    setText(newTxt);
    props.alert("String Sorted","Success")

  };
  const clrclk = () => {
    setText("");
    props.alert("String Cleared from TextBox","Success")

  };
  
  const cpyclk = () => {
    let nt=text.split(/[ ]+/);
    setText(nt.join(" "));
    navigator.clipboard.writeText(nt);
    props.alert("String copied to ClipBoard","Success")

  };
  const spcclk = () => {
    let nt=text.split(/[ ]+/);
    setText(nt.join(" "));
    props.alert("Extra Spaces Removed","Success")

  };
  
  const handleoc = (event) => {
    setText(event.target.value);
  };
  

  const [text, setText] = useState("");
  return (
    <div>
      {/* <div className="form-group" style={{color:(props.mode==='dark')?('white'):('brown')}}> */}
      <div className="form-group">
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          onChange={handleoc}
          id="mybox"
          rows="8"
          value={text.split(/[ ]+/).join(" ")} style={{backgroundColor:props.mode==='light'?'white':'black',color:(props.mode==='dark')?('white'):('crimson'),border:'3px solid red'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={upclk}>
        CONVERT TO UPPERCASE
      </button>
      <button className="btn btn-primary mx-3" onClick={lwclk}>
        CONVERT TO LOWERCASE
      </button>
      <button className="btn btn-primary mx-3" onClick={scsclk}>
        CONVERT TO SENTENCE_CASE STRING
      </button>
      <button className="btn btn-primary mx-3" onClick={srtclk}>
        CONVERT TO SORTED STRING
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={clrclk}>
        CLEAR ABOVE STRING
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={cpyclk}>
        COPY ABOVE STRING
      </button>
      <button className="btn btn-primary mx-1 my-2" onClick={spcclk}>
        REMOVE EXTRA SPACES
      </button>
      <div className="container my-4">
        <h1>YOUR TEXT SUMMARY</h1>
        <p>
          It contains {text.trim().split(/[ ]+/).join(" ").length===0?0:text.trim().split(/[ ]+/).length} words and {text.trim().length} characters
        </p>
        <div className="container">
          <h2>Preview</h2>
          <p>{text.split(/[ ]+/).join(" ").trim().length===0?'Write something to preview here':text.trim()}</p>
        </div>
      </div>
    </div>
  );
}
