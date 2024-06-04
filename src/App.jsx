import React, { useState } from 'react';
import './App.css';
import ClickHandle from './algo/matching-algo';
import { lines } from './algo/drawing-lines';



const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const HandleSubmit = () => {
    let allMatched = lines.length >= 4 && lines.every(line => line.end !== null);

    if (allMatched) {
      setModalVisible(true);
    } else {
      alert('Please match all the tiles.');
    }
  }

  const closeModal = () => {
    setModalVisible(false);
    window.location.reload();
  }

  return (
    <div className="App">
      <div className='topbar'><h1>Matching Game</h1></div>
      <br/><br/><br/>
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button" >
                  <div className="value_inside">Train Map</div>
                  <button className="inside_button" type="button" id="1" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">
                    <img src={require('./assets/elbato.png')} alt='batman'/>
                  </div>
                  <button className="inside_button" type="button" id="5" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button" >
                  <div className="value_inside">Floor Map</div>
                  <button className="inside_button" id="2" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">
                    <img src={require('./assets/floor1.png')} alt='floorplan'/>
                  </div>
                  <button className="inside_button" id="6" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button" >
                  <div className="value_inside">Food Collage</div>
                  <button className="inside_button" id="3" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">
                    <img src={require('./assets/train-line.jpeg')} alt='train-map'/>
                  </div>
                  <button className="inside_button" id="7" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button" >
                  <div className="value_inside">Batman</div>
                  <button className="inside_button" id="4" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">
                    <img src={require('./assets/collage.jpg')} alt='collage'/>
                  </div>
                  <button className="inside_button" id="8" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <canvas id="canvas"></canvas>
      </div>

      <footer><p>hint: 1-7, 2-6, 3-8, 4-5</p>
      <div className='botbar'><button type='button' onClick={HandleSubmit}>Submit!</button></div></footer>

      <div id="myModal" className={`modal ${modalVisible ? '' : 'modal-hidden'}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Good Job!</p>
          <img src={require('./assets/elbato.png')} alt='batmans'/>
        </div>
      </div>
    </div>
  );
}

export default App;
