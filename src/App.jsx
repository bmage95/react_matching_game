import './App.css';
import ClickHandle from './algo/matching-algo';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
