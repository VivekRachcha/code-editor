//import logo from './logo.svg';
//import './App.css';
//components
/*import Home from './components/Home';
import Login from './Login';
import DataProvider from './context/DataProvider';
import {Route,Routes} from 'react-router-dom';

function App() {
  return (
    // //<div className="App">
    // <div>
    //   <Login/>
    // </div>
    // <DataProvider>
    //       <Home />
    // </DataProvider>
    <Routes>
      <Route path="/" element={<DataProvider><Home/></DataProvider>}/>
      <Route path="/login" element={
      // <DataProvider>
        <Login/>
      // {/* </DataProvider> }
      }
      />
      </Routes>
    
  );
}*/
import Home from './components/Home';

import DataProvider from './context/DataProvider';

function App() {
  return (
    //<div className="App">
    <DataProvider>
          <Home />
    </DataProvider>
    //</div>
  );
}

export default App;
