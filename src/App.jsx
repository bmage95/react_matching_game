import React, { useState } from 'react';
import Xarrow from 'react-xarrows';
import './App.css';
import LeftBox from './algo/LeftBox';
import RightBox from './algo/RightBox';

const App = () => {
  const [arrows, setArrows] = useState([]);

  const addArrow = ({ start, end }) => {
    setArrows([...arrows, { start, end }]);
  };

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
                  <LeftBox className="inside_button" {...{ addArrow, handler: 'right', boxId: 'box2_1' }}/>
                </button>
              </td>
              <td className="Right">
                <button className="outside_button" type="button">
                  <div className="value_inside">
                    <img src={require('./assets/elbato.png')} alt="batman" />
                  </div>
                  <RightBox {...{ addArrow, handler: 'left', boxId: 'box2_2' }}/>
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
          <button type="button">
            Submit!
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
