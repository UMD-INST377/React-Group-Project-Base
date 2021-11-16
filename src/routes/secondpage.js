import { Link } from 'react-router-dom'
import Example from '../components/example.js'
import FetchExample from '../components/fetchexample.js';

export default function SecondPage() {
    return (
      <div className='App'>
        <h1>This is the second page</h1>
        <Link to='/'>First Page</Link>
        <Example />
        <FetchExample />
      </div>
    );
  }