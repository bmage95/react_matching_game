import './App.css';
import { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td className="Left">
              <button className="outside_button" type="button" id="1" >
                <div className="value_inside">1</div>
                <button className="inside_button" type="button" ></button>
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
              <button className="outside_button" type="button" id="2" >
                <div className="value_inside">2</div>
                <button className="inside_button" type="button" ></button>
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
    </div>
    );
  }


export default App;