import './App.css';
import { Headers, Headers1 } from './components/Headers';

import Headers2 from './components/Headers';

const a = 10;
 
function App() {
  const b = 10;

  const Style = {
    backgroundColor:'blue',
    border: '5px solid black' 
  }
  return (
   <>
    <Headers /> 
    <Headers1 /> 
    <Headers2 />
    <h1 style={Style}>hi  {a}</h1>
    {b}
   </>
  )
}

export default App;
