import React, { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";
import About from "./Component/About";
import Alert from "./Component/Alert";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect,
  Routes,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const sAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  // const toleMode0=()=>{
  //   if(mode==='light'){
  //     setMode('dark');
  //     document.body.style.background='#042743';
  //     document.body.style.color='white';
  //     sAlert("Dark Mode Acivated","success");

  //   }
  //   else{
  //     setMode('light')
  //     document.body.style.background='white';
  //     document.body.style.color='black';
  //     sAlert("Light Mode Acivated","success");

  //   }
  // }

  const toleMode0 = () => {
    setMode("light");
    document.body.style.background = "rgb(255 255 255)";
    document.body.style.color = "black";
    sAlert("LIGHT Mode Acivated", "success");
    let ele = document.getElementById("navbar");
    ele.style.setProperty(
      "background",
      "linear-gradient(to right,red,pink,lime,crimson,purple,green,yellow,blue)",
      "important"
    );
    document.title = "TextUtils-LIGHT";
    setInterval(() => {
      document.title = "TextUtils is Amazing";
    }, 1500);
    setInterval(() => {
      document.title = "Install TextUtils Now";
    }, 1000);
  };
  const toleMode01 = () => {
    setMode("dark");
    document.body.style.background = "rgb(18 6 25)";
    document.body.style.color = "white";
    sAlert("DARK Mode Acivated", "success");
    let ele = document.getElementById("navbar");
    ele.style.setProperty("background", "rgb(0 0 0)", "important");
    document.title = "TextUtils-DARK";
  };
  const toleMode1 = () => {
    setMode("light");
    document.body.style.background = "rgb(0 255 0)";
    document.body.style.color = "black";
    let ele = document.getElementById("navbar");
    ele.style.setProperty(
      "background",
      "linear-gradient(to left,coral,crimson,pink,purple,lime,yellow,blue,green,violet)",
      "important"
    );
    document.title = "TextUtils-GREEN";
  };
  const toleMode2 = () => {
    setMode("light");
    document.body.style.background = "rgb(169 0 0)";
    document.body.style.color = "white";
    let ele = document.getElementById("navbar");
    ele.style.setProperty(
      "background",
      "linear-gradient(to left,yellow,blue,red,green,violet,cyan,brown,pink,violet)",
      "important"
    );
    document.title = "TextUtils-RED";
  };
  const toleMode3 = () => {
    setMode("light");
    document.body.style.background = "cyan";
    document.body.style.color = "#27006d";
    let ele = document.getElementById("navbar");
    ele.style.setProperty(
      "background",
      "linear-gradient(to right,red,lime,crimson,green,yellow,blue,red,cyan,brown,pink,violet)",
      "important"
    );
    document.title = "TextUtils-BLUE";
  };
  const toleMode4 = () => {
    setMode("light");
    document.body.style.background = "#ffc413ed";
    let ele = document.getElementById("navbar");
    ele.style.setProperty(
      "background",
      "linear-gradient(to right,blue,crimson,yellow,blue,red,cyan,brown,pink,violet)",
      "important"
    );
    // ele.setAttribute('style', 'background:#a78316ed !important'); //it will also work
    document.body.style.color = "black";
    document.title = "TextUtils-Yellow";
  };
  return (
    <>
      {/* <BrowserRouter> */}
        <Navbar
          title="TextUtils"
          abt="About Us"
          mode={mode}
          toleMode0={toleMode0}
          toleMode01={toleMode01}
          toleMode1={toleMode1}
          toleMode2={toleMode2}
          toleMode3={toleMode3}
          toleMode4={toleMode4}
        />

        {/* // here title and abt are props(a component) were we can pass variable of our choice */}
        {/* When sending integer,it should be inclosed in curly braces e.g abc={532} */}
        <Alert alrt={alert} />
{/* 
        <Routes>
          <Route exact path="/about" element={<About />}>
            
          </Route> */}

          {/* <Route exact path="/" element={ */}
          <div className="container my-3">
              <TextForm
                heading="Enter text to analyze below"
                mode={mode}
                alert={sAlert}
              />
            </div>
       {/*      
          </Route>
        </Routes>
      </BrowserRouter> */}
      {/* <About/> */}
    </>
  );
}

export default App;
