import React from 'react';
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom';
import Header from "./Header"
import Hello from "./Hello"

function App() {
  return (
    <div >
      <BrowserRouter>
       <Header />
       <Switch>
        <Route exact path='/' component={Hello}></Route>
        
      </Switch> 
       </BrowserRouter>
    </div>
  );
}

export default App;
