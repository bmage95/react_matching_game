import './App.css';
import ClickHandle from './algo/matching-algo';

const HandleSubmit = () => {
  window.location.reload();
}

function App() {
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
                  <div className="value_inside">1</div>
                  <button className="inside_button" type="button" id="1" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">3</div>
                  <button className="inside_button" type="button" id="3" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
            <br/>
            <tr>
              <td className="Left">
                <button className="outside_button" type="button" >
                  <div className="value_inside">2</div>
                  <button className="inside_button" id="2" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
              <td>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</td>
              <td className="Right">
                <button className="outside_button" type="button" >
                  <div className="value_inside">4</div>
                  <button className="inside_button" id="4" type="button" onClick={ClickHandle}></button>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <canvas id="canvas"></canvas>
      </div>
      
      <footer><p>hint: 1-4, 2-3</p>
      <div className='botbar'><button type='button' onClick={HandleSubmit}>Submit!</button></div></footer>

    </div>
  );
}

export default App;

