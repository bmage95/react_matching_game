import './App.css';
import { useState, useEffect } from 'react';
let startPoint = null;
let endPoint = null;

const ClickHandle = (event) => {
  const button = event.target;
  const buttonId = button.id;
  const buttonRect = button.getBoundingClientRect();
  const buttonMidX = buttonRect.left + buttonRect.width / 2;
  const buttonMidY = buttonRect.top + buttonRect.height / 2;

  if (buttonId === "1") {
    startPoint = { x: buttonMidX, y: buttonMidY };
    console.log(`Button 1 was clicked at x: ${buttonMidX}, y: ${buttonMidY}`);
  } else if (buttonId === "2") {
    if (startPoint) {
      endPoint = { x: buttonMidX, y: buttonMidY };
      drawLine(startPoint, endPoint);
      startPoint = null;
      endPoint = null;
    } else {
      console.log("Please click button 1 first");
    }
  }
}

const drawLine = (startPoint, endPoint) => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.stroke();
}

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="Left">
              <button className="outside_button" type="button"  >
                <div className="value_inside">1</div>
                <button className="inside_button" type="button" id="1" onClick={ClickHandle}></button>
              </button>
            </td>
            <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
            <td className="Right">
              <button className="outside_button" type="button" id="3" >
                <div className="value_inside">3</div>
                <button className="inside_button" type="button" ></button>
              </button>
            </td>
          </tr>
          <br/>
          <tr>
            <td className="Left">
              <button className="outside_button" type="button"  >
                <div className="value_inside">2</div>
                <button className="inside_button" id="2" type="button" onClick={ClickHandle}></button>
              </button>
            </td>
            <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
            <td className="Right">
              <button className="outside_button" type="button" id="4">
                <div className="value_inside">4</div>
                <button className="inside_button" type="button"></button>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <canvas id="canvas" ></canvas>
    </div>
    );
  }


export default App;