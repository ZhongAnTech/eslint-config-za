import React from 'react';

class App extends React.Component {
  instanceProperty = 1;

  instancePropertyMethod = () => {
    // ...
  };

  instanceMethod() {
    // ... shold use `this`
    console.info(this);
  }

  render() {
    return <div>hello world</div>;
  }
}

export default App;
