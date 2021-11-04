
import { Link } from 'react-router-dom'
import './App.css';
import Example from './components/example.js'

function App() {
  return (
    <div className="App">
      <h1>This is the first page!</h1>
      <Link to='/secondpage'>Second Page</Link>
      <Example number={8} text='this is text passed through as a prop!'> 
        <p>This is a child of &lt;Example&gt;.</p>
      </Example>
    </div>
  );
}

export default App;
