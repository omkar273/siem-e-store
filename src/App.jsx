import './App.css';
import SmartPhones from './Pages/SmartPhones';
import { createRoot } from "react-dom/client";
import Netflix from './Pages/Netflix';
import Data_collection from './Pages/Data_collection';
import Increment_counter from './Pages/Increment_counter'
import Header from './Components/header';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Error404 from './Pages/Error404';

function App() {

  return (
    <Router>
      <div>
        <Header />
        {/* <SmartPhones /> */}
        <Routes>
          {/* home */}
          <Route path='/' element={<SmartPhones />} />
          <Route path='/Siem-E-store' element={<SmartPhones />} />
          <Route path='/netflix' element={<Netflix />} />
          <Route path='/inc' element={<Increment_counter />} />
          <Route path='/data' element={<Data_collection />} />
          <Route path='*' element={<Error404 />} />
        </Routes>
      </div>
    </Router >
  );
}

export default App;
