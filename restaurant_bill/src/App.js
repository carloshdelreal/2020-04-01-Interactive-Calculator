import React from 'react';
import './style/main.scss';
import Wrapper from './containers/wrapper';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Birthday Bill Split Calculator</h1>
        <p>Have you had a birthday dinner or lunch with your 
          colleges to celebrate some one's birthday?
        </p>

        <p>So you have been in the nightmare of trying to calculate 
          what everyone's have to pay because it's obvious that the
          birthday boy has not to pay a dime
        </p>

        <p>That is something of the past with this super useful App</p>
      </header>

      <Wrapper />
    </div>
  );
}

export default App;
