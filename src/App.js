import React from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import BasicRouter from './Config/router'

class App extends React.Component{
  render(){
    return(
      <div>
      <Provider store= {store}>
<BasicRouter />
      </Provider>
      </div>
    )
  }
}

export default App