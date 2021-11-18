import { Link } from 'react-router-dom';
import './App.css';
import Example from './components/example.js';
import HooksExample from './components/hooksexample.js';
import FetchExample from './components/fetchexample';

/*
 * This will be your index page regardless of whether you are using 1
 * or multiple pages.
 */
function App() {
  return (
    <div className="App">
      <h1>This is the first page!</h1>
      <Link to='/secondpage'>Second Page</Link>
      {/* <Example number={8} text='this is text passed through as a prop!'>
        <p>This is a child of &lt;Example&gt;.</p>
      </Example> */}
      <FetchExample />
      <HooksExample />
    </div>
  );
}

export default App;
