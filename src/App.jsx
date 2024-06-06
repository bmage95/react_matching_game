import React, { useState } from 'react';
import Xarrow from 'react-xarrows';
import './App.css';
import LeftBox from './algo/LeftBox';
import RightBox from './algo/RightBox';


const App = () => {
  const [arrows, setArrows] = useState([]);
  const [x, setX] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  const addArrow = ({ start, end }) => {
    setArrows([...arrows, { start, end }]);
    setX(x+1);
  };

  
const HandleSubmit = () => {
  if (x===4) {                 
    setModalVisible(true);
  } else {
    alert('Please match all the tiles.');
  }
};


  const closeModal = () => {      
    setModalVisible(false);
    window.location.reload();
  }

  return (
    <div className="App">
      <div className="topbar">
        <h1>Matching Game</h1>
      </div>
      <br /><br /><br />
      <div className="table-container">
        <table>
          <tbody>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button">
                  <div className="value_inside">Train Map</div>
                  <LeftBox className="inside_button" {...{ addArrow, handler: 'right', boxId: '1' }}/>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button">
                  <div className="value_inside">
                    <img src={require('./assets/elbato.png')} alt="batman" />
                  </div>
                  <RightBox {...{ addArrow, handler: 'left', boxId: '5' }}/>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button">
                  <div className="value_inside">Floor Map</div>
                  <LeftBox className="inside_button" {...{ addArrow, handler: 'right', boxId: '2' }}/>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button">
                  <div className="value_inside">
                    <img src={require('./assets/floor1.png')} alt="floor plan" />
                  </div>
                  <RightBox {...{ addArrow, handler: 'left', boxId: '6' }}/>
                </button>
              </td>
            </tr> 
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button">
                  <div className="value_inside">Food Collage</div>
                  <LeftBox className="inside_button" {...{ addArrow, handler: 'right', boxId: '3' }}/>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button">
                  <div className="value_inside">
                    <img src={require('./assets/train-line.jpeg')} alt="train" />
                  </div>
                  <RightBox {...{ addArrow, handler: 'left', boxId: '7' }}/>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button">
                  <div className="value_inside">Batman</div>
                  <LeftBox className="inside_button" {...{ addArrow, handler: 'right', boxId: '4' }}/>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button">
                  <div className="value_inside">
                    <img src={require('./assets/collage.jpg')} alt="collage" />
                  </div>
                  <RightBox {...{ addArrow, handler: 'left', boxId: '8' }}/>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      <canvas id="canvas"></canvas>
        {arrows.map((ar) => (
          <Xarrow start={ar.start} end={ar.end} key={ar.start + '-' + ar.end} />
        ))}
      </div>
      <footer>
        <p>hint: 1-7, 2-6, 3-8, 4-5</p>
        <div className="botbar">
          <button type="button" onClick={HandleSubmit}>
            Submit!
          </button>
        </div>
      </footer>

      <div id="myModal" className={`modal ${modalVisible ? '' : 'modal-hidden'}`}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p>Good Job!</p>
          <img src={require('./assets/elbato.png')} alt='batmans'/>
        </div>
      </div>

    </div>
  );
};

export default App;
