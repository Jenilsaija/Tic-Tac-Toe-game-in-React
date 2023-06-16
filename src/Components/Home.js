import React, { useEffect, useState } from "react";
import playerwin from "./playerwin";
import './Home.css'
const Home = () => {
  const [playerturn, setPlayerturn] = useState("Player-1");
  const [winner,setwinner]=useState("Please Start The Game");
  const [btnvalue,setBtnvalue]=useState({
    btn1:"...",
    btn2:"...",
    btn3:"...",
    btn4:"...",
    btn5:"...",
    btn6:"...",
    btn7:"...",
    btn8:"...",
    btn9:"...",
  });
  const ingamebuttonclick = async(btnno) => {
    if (playerturn === "Player-1") {
      if (btnno === "btn1") {
        setBtnvalue({...btnvalue,btn1:"O"})
      } else if (btnno === "btn2") {
        setBtnvalue({...btnvalue,btn2:"O"})
      } else if (btnno === "btn3") {
        setBtnvalue({...btnvalue,btn3:"O"})
      } else if (btnno === "btn4") {
        setBtnvalue({...btnvalue,btn4:"O"})
      } else if (btnno === "btn5") {
        setBtnvalue({...btnvalue,btn5:"O"})
      } else if (btnno === "btn6") {
        setBtnvalue({...btnvalue,btn6:"O"})
      } else if (btnno === "btn7") {
        setBtnvalue({...btnvalue,btn7:"O"})
      } else if (btnno === "btn8") {
        setBtnvalue({...btnvalue,btn8:"O"})
      } else if (btnno === "btn9") {
        setBtnvalue({...btnvalue,btn9:"O"})
      }
      setPlayerturn("Player-2");
    } else if (playerturn === "Player-2") {
      if (btnno === "btn1") {
        setBtnvalue({...btnvalue,btn1:"X"})
      } else if (btnno === "btn2") {
        setBtnvalue({...btnvalue,btn2:"X"})
      } else if (btnno === "btn3") {
        setBtnvalue({...btnvalue,btn3:"X"})
      } else if (btnno === "btn4") {
        setBtnvalue({...btnvalue,btn4:"X"})
      } else if (btnno === "btn5") {
        setBtnvalue({...btnvalue,btn5:"X"})
      } else if (btnno === "btn6") {
        setBtnvalue({...btnvalue,btn6:"X"})
      } else if (btnno === "btn7") {
        setBtnvalue({...btnvalue,btn7:"X"})
      } else if (btnno === "btn8") {
        setBtnvalue({...btnvalue,btn8:"X"})
      } else if (btnno === "btn9") {
        setBtnvalue({...btnvalue,btn9:"X"})
      }
      setPlayerturn("Player-1");
    }
  };

  const handlereplaybtn=()=>{
    setwinner("");
    setBtnvalue({
      btn1:"...",
      btn2:"...",
      btn3:"...",
      btn4:"...",
      btn5:"...",
      btn6:"...",
      btn7:"...",
      btn8:"...",
      btn9:"...",});
    setPlayerturn("Player-1")
  }

  useEffect(()=>{
    if (winner!=="Please Start The Game"){
    const result=playerwin(btnvalue);
    setwinner(result)}
    // eslint-disable-next-line
  },[btnvalue])

  return (
    <div className="container">
      <div className="row m-4 d=flex justify-content-center">
        <div className="text-center">
          <h1>2-Player Tic-Tac-Toe Game</h1>
        </div>
      </div>
      <div className="row mt-4 d=flex justify-content-center">
        <div className="col-3 d-flex justify-content-end">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn1!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn1"
            onClick={() => {
              ingamebuttonclick("btn1");
            }}
            value={btnvalue.btn1}
          />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn2!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn2"
            onClick={() => {
              ingamebuttonclick("btn2");
            }}
            value={btnvalue.btn2}
          />
        </div>
        <div className="col-3 d-flex justify-content-start">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn3!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn3"
            onClick={() => {
              ingamebuttonclick("btn3");
            }}
            value={btnvalue.btn3}
          />
        </div>
      </div>
      <div className="row mt-4 d=flex justify-content-center">
        <div className="col-3 d-flex justify-content-end">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn4!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn4"
            onClick={() => {
              ingamebuttonclick("btn4");
            }}
            value={btnvalue.btn4}
          />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn5!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn5"
            onClick={() => {
              ingamebuttonclick("btn5");
            }}
            value={btnvalue.btn5}
          />
        </div>
        <div className="col-3 d-flex justify-content-start">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn6!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn6"
            onClick={() => {
              ingamebuttonclick("btn6");
            }}
            value={btnvalue.btn6}
          />
        </div>
      </div>
      <div className="row mt-4 d=flex justify-content-center">
        <div className="col-3 d-flex justify-content-end">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn7!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn7"
            onClick={() => {
              ingamebuttonclick("btn7");
            }}
            value={btnvalue.btn7}
          />
        </div>
        <div className="col-3 d-flex justify-content-center">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn8!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn8"
            onClick={() => {
              ingamebuttonclick("btn8");
            }}
            value={btnvalue.btn8}
          />
        </div>
        <div className="col-3 d-flex justify-content-start">
          <input
            type="button"
            className={`btn in-game-button ${btnvalue.btn9!=="..."||winner?"disabled btn-info":"btn-light"}`}
            id="btn9"
            onClick={() => {
              ingamebuttonclick("btn9");
            }}
            value={btnvalue.btn9}
          />
        </div>
      </div>
      <div className="row m-2 mt-4 d=flex justify-content-center">
        <div className="col-6">
          <div className="d-grid gap-2">
            <button type="button" name="startbtn" id="startbtn" className="btn btn-outline-danger " onClick={()=>{
              setwinner("");
            }}>Start</button>
          </div>
        </div>
      </div>
      <div className="row m-2 text-center">
      <h2>{winner?winner:"Now "+playerturn +" turn"}</h2>
      </div>
      <div className="row m-2 mt-6 d=flex justify-content-center">
        <div className="col-6">
          <div className="d-grid gap-2">
            <button type="button" name="replaybtn" id="replaybtn" className={`btn btn-light ${winner==="Please Start The Game"||winner===""?"d-none":""}`} onClick={handlereplaybtn} >Replay</button>
          </div>
        </div>
      </div>
      </div>
  );
};

export default Home;
