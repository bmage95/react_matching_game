import React, { useState, useEffect } from 'react';
import Xarrow from 'react-xarrows';
import './App.css';
import LeftBox from './algo/LeftBox';
import RightBox from './algo/RightBox';

const App = () => {
  const [arrows, setArrows] = useState([]);
  const [x, setX] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [firstTimeModalVisible, setFirstTimeModalVisible] = useState(true);

  useEffect(() => {
    const hasSeenModalBefore = localStorage.getItem('hasSeenModalBefore');
    if (!hasSeenModalBefore) {
      setFirstTimeModalVisible(true);
    }
  }, []);

  const addArrow = ({ start, end }) => {
    setArrows([...arrows, { start, end }]);
    setX(x + 1);
  };

  const HandleSubmit = () => {
    if (x === 4) {
      setModalVisible(true);
    } else {
      alert('Please match all the tiles.');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    window.location.reload();
  };

  const closeFirstTimeModal = () => {
    setFirstTimeModalVisible(false);
    localStorage.setItem('hasSeenModalBefore', true);
  };

  return (
    <div className="App">
      <div className="topbar">
        <h1 style={{ textAlign: "center" }}>Matching Game</h1>
      </div>
      <br /><br /><br />
      <div className="table-container">
        <table>
          <tbody>
          <tr>
              <td className="Left">
                <button className="outside_button" type="button">
                  <div className="value_inside">Train Map</div>
                  <LeftBox {...{ addArrow, handler: 'right', boxId: '1' }}/>
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
                  <LeftBox {...{ addArrow, handler: 'right', boxId: '2' }}/>
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
                  <LeftBox {...{ addArrow, handler: 'right', boxId: '3' }}/>
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
                  <LeftBox {...{ addArrow, handler: 'right', boxId: '4' }}/>
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
        {arrows.map((ar) => (
          <Xarrow start={ar.start} end={ar.end} key={ar.start + '-' + ar.end} strokeWidth={3} color='green'/>
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

      <div id="firstTimeModal" className={`modal ${firstTimeModalVisible ? '' : 'modal-hidden'}`}>
        <div className="modal-content">
          <span className="close" onClick={closeFirstTimeModal}>&times;</span>
          <br/>   
          <p>Welcome to the Matching Game!</p>
                  
          <p>please <div className='instr_style1'>drag and drop</div><br/>
           the circles to its closest match</p>
          <span>(left to right)</span>
        </div>
      </div>
    </div>
  );
};

export default App;